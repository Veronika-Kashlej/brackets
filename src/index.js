module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const map = new Map(bracketsConfig);
  const open = new Array(...map.keys());
  for(let i = 0; i < str.length; i += 1){
    if(open.includes(str[i])){
      if(map.get(str[i]) === str[i] && stack.length > 0 && stack[stack.length - 1] === str[i]){
        stack.pop()
      }else {
        stack.push(str[i]);
      }
    }else{
      if(stack.length === 0){
        return false;
      } else{
        if(str[i] === map.get(stack[stack.length-1])){
          stack.pop();
        }
      }
    }
  }
  return stack.length === 0;
}
