import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Counter.module.css';
import { counterValueSelector, increment, decrement } from '../../redux';

export function Counter() {
  const count = useSelector(counterValueSelector);

  const dispatch = useDispatch();

  const handleDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.row}>
        <button aria-label='Decrement value' onClick={handleDecrement}>
          -
        </button>

        <span className={styles.value}>{count}</span>

        <button aria-label='Increment value' onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
}
