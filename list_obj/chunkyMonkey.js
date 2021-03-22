function chunkArrayInGroups(arr, size) {
    var newArr = [];
    let j = size;
    for (var i = 0; i < arr.length; i += size){
      let arr1 = arr.slice(i, j);
      newArr.push(arr1);
      j += size;
    }
    console.log(newArr);
    return newArr;
  }

  chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);