module.exports = (bool, msg, strict) => {
  if (typeof msg !== 'string') throw new Error('Second parameter must be a string');
  strict = strict == null ? true : strict;

  if (bool !== true) {
    if (strict === true) {
      throw new Error(msg);
    } else {
      console.error(msg);
    }
  }
};
