import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { userDataSelector, updateUserData } from '../../redux';

export const UserForm = () => {
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
      <Button color='primary' variant='contained' onClick={onUpdateUserData}>
        Updata User Data
      </Button>

      <p>{JSON.stringify(userData)}</p>
    </div>
  );
};
