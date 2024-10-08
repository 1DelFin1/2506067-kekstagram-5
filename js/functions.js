/* eslint-disable no-unused-vars */
function checkIsLonger(str, length) {
  if (str.length <= length) {
    return true;
  } else {
    return false;
  }
}

function checkIsPalindrom(str) {
  const helpStr = str.toLowerCase().replaceAll(' ', '');
  let helpStr2 = '';
  for (let i = helpStr.length - 1; i >= 0; i--) {
    helpStr2 += helpStr[i];
  }
  if (helpStr === helpStr2) {
    return true;
  } else {
    return false;
  }
}

function checkIsInteger(str) {
  const result = str.toString().replace(/\D/g,'');
  if (result.length > 0) {
    return result;
  } else {
    return NaN;
  }
}
