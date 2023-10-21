/* IMAGES */
import icon from '../../images/icon-arrow.svg';

const SubmitButton = () => {
  return (
    <div className="submit">
      <hr />
      <button>
        <img src={icon} alt="icon" />
      </button>
    </div>
  );
};

export default SubmitButton;
