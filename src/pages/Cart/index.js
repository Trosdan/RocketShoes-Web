import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';

import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';
import * as checkoutData from '../../assets/anim/checkout.json';
import Modal from '../../components/Modal';

export default function Cart() {
  const [showModal, setShowModal] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [isStoped, setIsStoped] = useState(true);

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function handlerModalOpen() {
    setIsPaused(false);
    setIsStoped(false);
    setShowModal(true);
  }

  function handlerClose() {
    setShowModal(false);
    setIsStoped(true);
    dispatch(CartActions.reset());
  }

  function handlerCheckout() {
    if (cart.length === 0) {
      toast.error('Carrinho esta vazio');
    } else {
      handlerModalOpen();
    }
  }

  return (
    <>
      <Modal
        show={showModal}
        handlerClose={() => handlerClose()}
        title="Compra Finalizada"
      >
        <Lottie
          options={{
            animationData: checkoutData.default,
            loop: false,
            autoplay: false,
          }}
          height="100"
          width="100"
          isPaused={isPaused}
          isStopped={isStoped}
          isClickToPauseDisabled
          eventListeners={[
            {
              eventName: 'enterFrame',
              callback: frame => {
                if (frame.currentTime > 100) {
                  setIsPaused(true);
                }
              },
            },
          ]}
        />
      </Modal>
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>Produto</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cart.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="#7159c1" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <MdDelete size={20} color="#7159c1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer>
          <Total>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </Total>
          <button type="button" onClick={() => handlerCheckout()}>
            Finalizar pedido
          </button>
        </footer>
      </Container>
    </>
  );
}
