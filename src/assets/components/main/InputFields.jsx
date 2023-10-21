import PropTypes from 'prop-types';
import { useState } from 'react';

/* FUNCTIONS */
import { setEmptyErrorState, checkValidDate } from '../../error/ErrorHandler';

/* CSS */
import './InputFields.css';

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

const InputFields = ({ birthDate, onSetBirthDate, onSetOutputAge }) => {
  const [errorHandling, setErrorHandling] = useState(defaultErrorHandlingObj);

  const handleSetOutputAge = (e) => {
    e.preventDefault();
    // check if empty
    if (birthDate.day === '' || birthDate.month === '' || birthDate.year === '') {
      let isEmptyDay = birthDate.day === '';
      let isEmptyMonth = birthDate.month === '';
      let isEmptyYear = birthDate.year === '';
      setEmptyErrorState(isEmptyDay, isEmptyMonth, isEmptyYear, setErrorHandling);
      return;
    }

    // check if valid Date
    // let date = new Date(`${birthDate.year}/${birthDate.month}/${birthDate.day}`);
    let date = new Date('2012/2/32');
    console.log(date.isValid());
    // if (checkValidDate(date)) {
    //   console.log('invalid');
    // }
    // console.log(date);
  };

  Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
  };

  return (
    <form className="form" onSubmit={handleSetOutputAge}>
      <div className="day">
        <label htmlFor="day" className={errorHandling.day.isError ? 'error' : ''}>
          DAY
        </label>
        <input
          type="number"
          min="1"
          // max="31"
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
          // max="31"
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
          placeholder="DD"
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
      <input type="submit" hidden />
    </form>
  );
};

InputFields.propTypes = {
  birthDate: PropTypes.object,
  onSetBirthDate: PropTypes.func,
  onSetOutputAge: PropTypes.func,
};

export default InputFields;
