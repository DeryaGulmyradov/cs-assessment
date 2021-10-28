import React, { useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { userDataSelector, updateUserData } from '../../redux';
import { FormGrid } from './FormGrid';

export const EmployeeForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector(userDataSelector);
  const { firstName, lastName, hourlyRate } = userData;

  const handleFormSubmit = useCallback(
    (formData) => {
      dispatch(updateUserData(formData));
    },
    [dispatch],
  );

  return (
    <Form
      initialValues={{
        firstName,
        lastName,
        hourlyRate,
      }}
      onSubmit={handleFormSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container alignItems='flex-start' direction='row' spacing={2}>
            <FormGrid />
          </Grid>
        </form>
      )}
    />
  );
};
