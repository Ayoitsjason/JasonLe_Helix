export const toggleBool = (boolean) => {
  return boolean ? false : true;
};

export const requestError = (err) => {
  return { success: false, message: `Code: ${err.code} ${err.message}` };
};

export const timeoutBooleanFunction = (func, boolean1, boolean2, time) => {
  func(boolean1);
  return setTimeout(() => {
    func(boolean2);
  }, time);
};
