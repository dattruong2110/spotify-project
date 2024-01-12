import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ExpiryForm = () => {
  const initialValues = {
    expiry: '',
  };

  const validationSchema = Yup.object({
    expiry: Yup.string()
      .required('Expiration date cannot be left blank')
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid format (MM/YY)'),
  });

  const isCardExpired = (expiry) => {
    if (!expiry || !expiry.includes('/')) {
      return false;
    }

    const [month, year] = expiry.split('/');
    const currentDate = new Date();
    const expiryDate = new Date(2000 + parseInt(year, 10), parseInt(month, 10) - 1, 1);

    return expiryDate < currentDate;
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      // Xử lý khi cần thực hiện hành động sau khi kiểm tra
    },
  });

  const inputStyles = {
    borderColor: isCardExpired(formik.values.expiry) ? 'red' : 'initial',
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (/^\d{2}$/.test(inputValue)) {
      formik.setFieldValue('expiry', `${inputValue}/`);
    } else {
      formik.handleChange(event);
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="expiry">Expiry date:</label>
        <input
          type="text"
          id="expiry"
          name="expiry"
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
          value={formik.values.expiry}
          placeholder="MM/YY"
          style={inputStyles}
        />
        {formik.touched.expiry && formik.errors.expiry ? (
          <div style={{ color: '#f15e6c' }}>{formik.errors.expiry}</div>
        ) : null}
      </div>

      {isCardExpired(formik.values.expiry) && (
        <div style={{ color: '#f15e6c' }}>
            <i class="fas fa-exclamation text-dark"></i>
          This card has expired.</div>
      )}
    </form>
  );
};

export default ExpiryForm;
