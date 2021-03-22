function repeatStringNumTimes(str, num) {
    let result = "";
    for (var i = 0; i < num; i++){
      result += str;
    }
    return result;
  }
  
  repeatStringNumTimes("abc", 3);