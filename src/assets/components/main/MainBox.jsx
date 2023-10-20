import { useState } from 'react';
import InputFields from './InputFields';

/* CSS */
import './MainBox.css';
import OutputField from './OutputField';

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

const MainBox = () => {
  const [birthDate, setBirthDate] = useState({
    day: '',
    month: '',
    year: '',
  });
  const [outputAge, setOutputAge] = useState({
    years: '--',
    months: '--',
    days: '--',
  });

  const [errorHandling, setErrorHandling] = useState(defaultErrorHandlingObj);

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

  const handleSetOutputAge = (e) => {
    e.preventDefault();
    console.log(e);
    // validate birtdate state ...!!!!
    if (birthDate.day === '') {
      setErrorHandling({
        ...errorHandling,
                  day.isError: true
  
      });
      console.log(errorHandling);
      return;
    }
  };

  return (
    <main>
      <div className="wrapper">
        <InputFields
          birthDate={birthDate}
          onSetBirthDate={handleSetBirthDate}
          errorHandling={errorHandling}
          onSetOutputAge={handleSetOutputAge}
        />
        <OutputField outputAge={outputAge} />
      </div>
    </main>
  );
};

export default MainBox;
