import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import styles from './Counter.module.css';
import { userDataSelector, updateUserData } from '../../redux';

export function Counter() {
  const dispatch = useDispatch();
  const userData = useSelector(userDataSelector);

  const onUpdateUserData = useCallback(() => {
    dispatch(
      updateUserData({
        id: 1,
        name: 'John',
        street: '600 Fannin Rd, Houston',
        city: 'Houston',
      }),
    );
  }, [dispatch]);

  return (
    <div>
      <div className={styles.row}>
        <Button color='primary' variant='contained' onClick={onUpdateUserData}>
          Updata User Data
        </Button>

        <p>{JSON.stringify(userData)}</p>
      </div>
    </div>
  );
}
