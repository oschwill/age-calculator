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
    years: '--',
    months: '--',
    days: '--',
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
  };

  return (
    <main>
      <div className="wrapper">
        <InputFields
          birthDate={birthDate}
          onSetBirthDate={handleSetBirthDate}
          onSetOutPutAge={setOutputAge}
        />
        <OutputField outputAge={outputAge} />
      </div>
    </main>
  );
};

export default MainBox;
