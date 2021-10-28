import React from 'react';
import { Grid } from '@material-ui/core';
import { TextField } from 'mui-rff';
import { useStyles } from './Form.style';
import { SubmitButton } from './SubmitButton';

export const FormGrid = () => {
  const { textField } = useStyles();

  return (
    <>
      <Grid container item direction='column' alignItems='center' spacing={2}>
        <TextField
          label='First Name'
          name='firstName'
          placeholder='First Name'
          className={textField}
          required
        />
        <TextField
          label='Last Name'
          name='lastName'
          placeholder='Last Name'
          className={textField}
          required
        />
        <TextField
          label='Desired Hourly Rate'
          name='hourlyRate'
          placeholder='Desired Hourly Rate'
          className={textField}
          required
        />
      </Grid>

      {SubmitButton}
    </>
  );
};
