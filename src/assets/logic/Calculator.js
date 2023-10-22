const MaxDays = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const calculateAge = (_birthDate, _currentDate) => {
  let age_dt = new Date(Date.now() - _birthDate.getTime());

  let years = Math.abs(age_dt.getUTCFullYear() - 1970);
  let months = Math.abs(age_dt.getUTCMonth());
  let days = 0;

  if (_birthDate.getDate() <= _currentDate.getDate()) {
    days = _currentDate.getDate() - _birthDate.getDate();
  } else {
    days = MaxDays[_birthDate.getMonth()] + _currentDate.getDate() - _birthDate.getDate();
  }

  return {
    years,
    months,
    days,
  };
};
