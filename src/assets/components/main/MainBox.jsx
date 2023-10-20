import { useState } from 'react';
import InputFields from './InputFields';

/* CSS */
import './MainBox.css';
import OutputField from './OutputField';

const MainBox = () => {
  const [birthDate, setBirthDate] = useState({
    day: '',
    month: '',
    year: '',
  });
  const [outputAge, setOutputAge] = useState({
    year: '--',
    months: '--',
    days: '--',
  });

  const [errorHandling, setErrorHandling] = useState({
    day: false,
    month: false,
    year: false,
    msg: '',
  });

  const handleSetBirthDate = (newBirthDate) => {
    if (
      newBirthDate.day.length > 2 ||
      newBirthDate.month.length > 2 ||
      newBirthDate.year.length > 4
    ) {
      return;
    }
    setBirthDate(newBirthDate);
    console.log(newBirthDate);
  };

  const handleSetOutputAge = () => {
    // validate birtdate state ...!!!!
  };

  return (
    <main>
      <div className="wrapper">
        <InputFields
          birthDate={birthDate}
          onSetBirthDate={handleSetBirthDate}
          errorHandling={errorHandling}
        />
        <OutputField outputAge={outputAge} onSetOutputAge={handleSetOutputAge} />
      </div>
    </main>
  );
};

export default MainBox;
