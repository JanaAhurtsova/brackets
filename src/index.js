module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openingBrackets = [];
  const bracketPairs = Object.fromEntries(bracketsConfig);

  if(str.length % 2 != 0) {
    return false;
  }

  for (let j= 0; j < bracketsConfig.length; j++) {
    openingBrackets.push(bracketsConfig[j][0])
  }

  for (let i=0; i < str.length; i++) {
    if(openingBrackets.includes(str[i])) {

      if(str[i] === bracketPairs[str[i]] && str[i] === stack[stack.length - 1]) {
        stack.pop();
        continue;
      }

      stack.push(str[i]);
      continue;
    } 

    if (str[i] === bracketPairs[stack[stack.length - 1]]) {
    stack.pop();
    } 
  }
  return stack.length === 0;

  };


