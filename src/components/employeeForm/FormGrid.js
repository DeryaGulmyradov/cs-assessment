import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { TextField } from 'mui-rff';
import { useStyles } from './Form.style';
import { SubmitButton } from './SubmitButton';

export const FormGrid = ({ onIncrement }) => {
  const { root, textField } = useStyles();

  return (
    <>
      <Grid container item direction='column' alignItems='center' spacing={2}>
        <div className={root}>
          <TextField
            label='First Name'
            name='firstName'
            placeholder='First Name'
            className={textField}
            required
          />
        </div>
        <div className={root}>
          <TextField
            label='Last Name'
            name='lastName'
            placeholder='Last Name'
            className={textField}
            required
          />
        </div>
        <div className={root}>
          <TextField
            label='Desired Hourly Rate'
            name='hourlyRate'
            placeholder='Desired Hourly Rate'
            className={textField}
            required
          />
        </div>
        <div className={root}>
          <TextField
            label='Counter Value'
            name='counter'
            placeholder='Counter Value'
            disabled={true}
          />
          <Button color='primary' variant='contained' onClick={onIncrement}>
            +
          </Button>
        </div>
      </Grid>

      {SubmitButton}
    </>
  );
};
