import React, { useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { userDataSelector, counterSelector, updateUserData, updateCounter } from '../../redux';
import { FormGrid } from './FormGrid';
import { useStyles } from './Form.style';

export const EmployeeForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector(userDataSelector);
  const counterValue = useSelector(counterSelector);

  const { formWrapper } = useStyles();

  const { firstName, lastName, hourlyRate, counter } = userData;

  const handleFormSubmit = useCallback(
    (formData) => {
      console.log('USER DATA: ', formData);
      dispatch(updateUserData(formData));
    },
    [dispatch],
  );

  const handleIncrement = useCallback(() => {
    dispatch(updateCounter(counterValue + 1));
  }, [dispatch, counterValue]);

  return (
    <div className={formWrapper}>
      <Form
        initialValues={{
          firstName,
          lastName,
          hourlyRate,
          counter: counterValue,
        }}
        onSubmit={handleFormSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container alignItems='flex-start' direction='row' spacing={2}>
              <FormGrid onIncrement={handleIncrement} />
            </Grid>
          </form>
        )}
      />
    </div>
  );
};
