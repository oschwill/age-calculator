/* IMAGES */
import icon from '../../images/icon-arrow.svg';
/* CSS */
import './OutputField.css';

const OutputField = () => {
  return (
    <div className="output">
      <div className="top">
        <hr />
        <img src={icon} alt="icon" />
      </div>
      <div className="bottom">
        <p>
          <span className="output-var-color">--</span>years
        </p>
        <p>
          <span className="output-var-color">--</span>months
        </p>
        <p>
          <span className="output-var-color">--</span>days
        </p>
      </div>
    </div>
  );
};

export default OutputField;
