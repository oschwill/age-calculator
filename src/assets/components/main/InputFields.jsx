import PropTypes from 'prop-types';

/* CSS */
import './InputFields.css';

const InputFields = ({ birthDate, onSetBirthDate, errorHandling }) => {
  return (
    <form className="form">
      <div className="day">
        <label htmlFor="day">DAY</label>
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
        <span className="error">Placeholder</span>
      </div>
      <div className="month">
        <label htmlFor="month">MONTH</label>
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
        <span className="error">Placeholder</span>
      </div>
      <div className="year">
        <label htmlFor="year">YEAR</label>
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
        <span className="error">Placeholder</span>
      </div>
    </form>
  );
};

InputFields.propTypes = {
  birthDate: PropTypes.object,
  onSetBirthDate: PropTypes.func,
  errorHandling: PropTypes.object,
};

export default InputFields;
