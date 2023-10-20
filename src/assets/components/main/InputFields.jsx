import PropTypes from 'prop-types';

/* CSS */
import './InputFields.css';

const InputFields = ({ birthDate, onSetBirthDate, errorHandling, onSetOutputAge }) => {
  return (
    <form className="form" onSubmit={onSetOutputAge}>
      <div className="day">
        <label htmlFor="day" className={errorHandling.day.isError ? 'error' : ''}>
          DAY
        </label>
        <input
          type="number"
          min="1"
          max="31"
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
          max="31"
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
  errorHandling: PropTypes.object,
  onSetOutputAge: PropTypes.func,
};

export default InputFields;
