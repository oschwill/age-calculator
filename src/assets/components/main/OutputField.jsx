import PropTypes from 'prop-types';

/* IMAGES */
import icon from '../../images/icon-arrow.svg';
/* CSS */
import './OutputField.css';

const OutputField = ({ outputAge }) => {
  return (
    <div className="output">
      <div className="top">
        <hr />
        <img src={icon} alt="icon" />
      </div>
      <div className="bottom">
        <p>
          <span className="output-var-color">{outputAge.years}</span>years
        </p>
        <p>
          <span className="output-var-color">{outputAge.months}</span>months
        </p>
        <p>
          <span className="output-var-color">{outputAge.days}</span>days
        </p>
      </div>
    </div>
  );
};

OutputField.propTypes = {
  outputAge: PropTypes.object,
};

export default OutputField;
