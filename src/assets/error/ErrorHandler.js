let errorMessage = '';

export const setEmptyErrorState = (_isEmptyDay, _isEmptyMonth, _isEmptyYear, _setErrorHandling) => {
  errorMessage = 'This field is required';
  _setErrorHandling((error) => ({
    ...error,
    day: {
      isError: _isEmptyDay,
      msg: errorMessage,
    },
    month: {
      isError: _isEmptyMonth,
      msg: errorMessage,
    },
    year: {
      isError: _isEmptyYear,
      msg: errorMessage,
    },
  }));
};

export const checkIfFutureDate = (_validateDate, _currentDate, _setErrorHandling) => {
  // check if date is in future
  if (_currentDate.getFullYear() < _validateDate.getFullYear()) {
    setErrorState(_setErrorHandling, 'Must be in the past', 'year');

    return false;
  } else if (
    _validateDate.getFullYear() === _currentDate.getFullYear() &&
    _validateDate.getMonth() > _currentDate.getMonth()
  ) {
    setErrorState(_setErrorHandling, 'Must be in the past', 'month');

    return false;
  } else if (
    _validateDate.getMonth() === _currentDate.getMonth() &&
    _validateDate.getFullYear() === _currentDate.getFullYear() &&
    _validateDate.getDate() > _currentDate.getDate()
  ) {
    setErrorState(_setErrorHandling, 'Must be in the past', 'day');

    return false;
  }

  return true;
};

export const checkIfValidDate = (_validateDate, _inputDate, _setErrorHandling) => {
  let returnBool = true;
  // check day
  if (Number(_validateDate.getDate()) !== Number(_inputDate.day)) {
    returnBool = false;
    setErrorState(_setErrorHandling, 'Must be a valid day', 'day');
  }

  // check month
  if (Number(_inputDate.month) > 12) {
    returnBool = false;
    setErrorState(_setErrorHandling, 'Must be a valid month', 'month');
  }

  return returnBool;
};

const setErrorState = (_callback, _errorMessage, index) => {
  _callback((error) => ({
    ...error,
    [index]: {
      isError: true,
      msg: _errorMessage,
    },
  }));
};
