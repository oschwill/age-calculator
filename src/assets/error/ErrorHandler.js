export const setEmptyErrorState = (_isEmptyDay, _isEmptyMonth, _isEmptyYear, _setErrorHandling) => {
  let errorMessage = 'This field is required';
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

// export const checkValidDate = (Date.prototype.isValid = function () {
//   return this.getTime() === this.getTime();
// });

export function checkValidDate() {
  Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
  };
}
