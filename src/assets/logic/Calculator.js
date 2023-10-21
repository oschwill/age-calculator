// export const calculateAge = (_inputYear, _inputMonth, _inputDay, _currentDate) => {
export const calculateAge = (_inputDate, _currentDate) => {
  // const currentYear = _currentDate.getFullYear();
  // const currentmonth = _currentDate.getMonth() + 1;
  // const currentday = _currentDate.getDate();

  // const years = currentYear - _inputYear;
  // const months = currentmonth - _inputMonth;
  // const days = currentday - _inputDay;
  let calcTimeStamp = _currentDate - _inputDate;

  let newDateTime = new Date(calcTimeStamp);

  console.log(newDateTime.getFullYear());

  // console.log(_inputDate.getTime());
  // console.log(_inputDate);
  // return {
  //   years,
  //   months,
  //   days,
  // };
};
