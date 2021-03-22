function getIndexToIns(arr, num) {
    if (arr === []){
      return 0;
    }
    let temp = 0;
    for (var i = 0; i < arr.length; i++){
      temp = arr[i];
      for (var j = i+1; j < arr.length; j++){
        if (temp >= arr[j]){
          arr[i] = arr[j]
          arr[j] = temp
          temp = arr[i];
        }
      }
    }
    for (i = 0; i < arr.length; i++){
      if (num == arr[i]){
        return i;
      }
      if (arr[i] == arr[i+1]){
        continue;
      }
      if (num > arr[i] && num < arr[i+1]){
        return (i + 1);
      }
    }
    console.log(i);
    return i;
  }

  getIndexToIns([5,3,20,3], 5);