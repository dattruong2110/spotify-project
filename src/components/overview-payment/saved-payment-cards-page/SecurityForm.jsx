import React from 'react';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SecurityForm = () => {
  const formik = useFormik({
    initialValues: {
      numericInput: '',
    },
    validate: (values) => {
      const errors = {};

      if (!/^\d+$/.test(values.numericInput) || values.numericInput.length > 3) {
        errors.numericInput = '';
      }

      return errors;
    },
  });

  return (
    <div style={{ display: 'flex' }}>
      <label htmlFor="numericInput">Security code:</label>
      <input
        id="numericInput"
        name="numericInput"
        type="text"
        maxLength={3}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.numericInput}
        title="The security code, or CVV, refers
        to the extra 3 or 4 numbers on the
        back or front of your card."
      />
      {formik.touched.numericInput && formik.errors.numericInput ? (
        <div>{formik.errors.numericInput}</div>
      ) : null}
      <FontAwesomeIcon icon={<i class="fa fa-question-circle" aria-hidden="true"></i>} style={{ marginLeft: '5px' }} />
    </div>
  );
};

export default SecurityForm;
