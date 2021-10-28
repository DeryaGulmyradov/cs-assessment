import React, { useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { userDataSelector, counterSelector, updateUserData, updateCounter } from '../../redux';
import { FormGrid } from './FormGrid';
import { useStyles } from './Form.style';

export const EmployeeForm = () => {
  const dispatch = useDispatch();
  const counter = useSelector(counterSelector);

  const userData = useSelector(userDataSelector);
  const { firstName, lastName, hourlyRate } = userData;

  const { formWrapper } = useStyles();

  const handleFormSubmit = useCallback(
    (formData) => {
      console.log('FORM DATA: ', formData);
      dispatch(updateUserData(formData));
    },
    [dispatch],
  );

  const handleIncrement = useCallback(() => {
    dispatch(updateCounter(counter + 1));
  }, [dispatch, counter]);

  return (
    <div className={formWrapper}>
      <Form
        initialValues={{
          firstName,
          lastName,
          hourlyRate,
          counter,
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
