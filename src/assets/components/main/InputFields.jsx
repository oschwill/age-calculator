import PropTypes from 'prop-types';
import { useState } from 'react';

/* FUNCTIONS */
import { setEmptyErrorState, checkIfFutureDate, checkIfValidDate } from '../../error/ErrorHandler';
import { calculateAge } from '../../logic/Calculator';

/* CSS */
import './InputFields.css';
import SubmitButton from './SubmitButton';

/* DATA */
const defaultErrorHandlingObj = {
  day: {
    isError: false,
    msg: '',
  },
  month: {
    isError: false,
    msg: '',
  },
  year: {
    isError: false,
    msg: '',
  },
};

let isValid = true;
let isEmpty = false;

const InputFields = ({ birthDate, onSetBirthDate, onSetOutputAge }) => {
  const [errorHandling, setErrorHandling] = useState(defaultErrorHandlingObj);

  const handleSetOutputAge = (e) => {
    e.preventDefault();

    // Reset ErrorHandler
    setErrorHandling(defaultErrorHandlingObj);
    isValid = true;
    isEmpty = false;

    // check if empty
    if (birthDate.day === '' || birthDate.month === '' || birthDate.year === '') {
      let isEmptyDay = birthDate.day === '';
      let isEmptyMonth = birthDate.month === '';
      let isEmptyYear = birthDate.year === '';
      setEmptyErrorState(isEmptyDay, isEmptyMonth, isEmptyYear, setErrorHandling);
      isEmpty = true;
    }

    // check if Date is not in future
    let date = new Date(birthDate.year, birthDate.month - 1, birthDate.day);
    let currentDate = new Date();

    if (
      !checkIfValidDate(
        date,
        {
          year: birthDate.year,
          month: birthDate.month,
          day: birthDate.day,
        },
        setErrorHandling
      ) &&
      !isEmpty
    ) {
      isValid = false;
    }

    if (!checkIfFutureDate(date, currentDate, setErrorHandling)) {
      isValid = false;
    }

    if (!isValid || isEmpty) {
      return;
    }

    // Calculate Age
    const outPutAge = calculateAge(date, currentDate);

    // Set Output
    onSetOutputAge(outPutAge);
  };

  return (
    <form className="form" onSubmit={handleSetOutputAge}>
      <div className="inner-form">
        <div className="day">
          <label htmlFor="day" className={errorHandling.day.isError ? 'error' : ''}>
            DAY
          </label>
          <input
            type="number"
            min="1"
            placeholder="DD"
            id="day"
            value={birthDate.day}
            onChange={(e) => {
              onSetBirthDate({
                day: e.target.value,
                month: birthDate.month,
                year: birthDate.year,
              });
            }}
            className={errorHandling.day.isError ? 'error-border' : ''}
          />
          <span className="error">{errorHandling.day.isError && errorHandling.day.msg}</span>
        </div>
        <div className="month">
          <label htmlFor="month" className={errorHandling.month.isError ? 'error' : ''}>
            MONTH
          </label>
          <input
            type="number"
            min="1"
            placeholder="MM"
            id="month"
            value={birthDate.month}
            onChange={(e) => {
              onSetBirthDate({
                day: birthDate.day,
                month: e.target.value,
                year: birthDate.year,
              });
            }}
            className={errorHandling.month.isError ? 'error-border' : ''}
          />
          <span className="error">{errorHandling.month.isError && errorHandling.month.msg}</span>
        </div>
        <div className="year">
          <label htmlFor="year" className={errorHandling.year.isError ? 'error' : ''}>
            YEAR
          </label>
          <input
            type="number"
            min="1"
            placeholder="YYYY"
            id="year"
            value={birthDate.year}
            onChange={(e) => {
              onSetBirthDate({
                day: birthDate.day,
                month: birthDate.month,
                year: e.target.value,
              });
            }}
            className={errorHandling.year.isError ? 'error-border' : ''}
          />
          <span className="error">{errorHandling.year.isError && errorHandling.year.msg}</span>
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};

InputFields.propTypes = {
  birthDate: PropTypes.object,
  onSetBirthDate: PropTypes.func,
  onSetOutputAge: PropTypes.func,
};

export default InputFields;
