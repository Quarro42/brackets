module.exports = function check(str, bracketsConfig) {
  // your solution
  let openBrackets = [];
  let closeBrackets = [];
  let strOpenBrackets = [];
  let specialBrackets = [];
  
  bracketsConfig.forEach(element => {
    openBrackets.push(element[0]);
    closeBrackets.push(element[1]);
  });
  for (let k = 0; k < str.length; k++) {
    if (openBrackets.includes(str[k]) && closeBrackets.includes(str[k]) && !strOpenBrackets.includes(str[k]) ) {
      strOpenBrackets.push(str[k]);
      specialBrackets.push(str[k]);
    } else if (openBrackets.includes(str[k]) && !specialBrackets.includes(str[k]) ) {
      strOpenBrackets.push(str[k])
    } else {
      if (str[k] !== closeBrackets[openBrackets.indexOf(strOpenBrackets[strOpenBrackets.length - 1])] ||  !strOpenBrackets.length ) {
        return false
      }
      strOpenBrackets.pop();
    }
  }
  if (strOpenBrackets.length) {
    return false;
  }
  return true
}



