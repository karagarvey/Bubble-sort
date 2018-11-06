function split(wholeArray) {
  let mid = Math.floor(wholeArray.length / 2)

  let firstHalf = wholeArray.slice(0, mid)
  let secondHalf = wholeArray.slice(mid)

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let lPointer = 0;
  let rPointer = 0;
  let mergedArr = [];

  while (mergedArr.length < (arr1.length + arr2.length)) {
    let leftEl = arr1[lPointer]
    let rightEl = arr2[rPointer]

    // if (lPointer >= arr1.length) {
    //   mergedArr.push(rightEl)
    //   rPointer++;
    // } else if (rPointer >= arr2.length) {
    //   mergedArr.push(leftEl);
    //   lPointer++;
    // }

    if (rightEl < leftEl || leftEl === undefined) {
      mergedArr.push(rightEl);
      rPointer++;
    } else if (leftEl < rightEl || rightEl === undefined) {
      mergedArr.push(leftEl);
      lPointer++;
    } else if (leftEl === rightEl) {
      mergedArr.push(rightEl);
      mergedArr.push(leftEl);
      rPointer++;
      lPointer++;
    }
  }

  return mergedArr;
}


function mergeSort(arr){

  if (arr.length === 1){
    return arr
  } else {
    let splitArr = split(arr)
    let firstHalf = splitArr[0]
    let secondHalf = splitArr[1]

    let firstHalfSorted = mergeSort(firstHalf)
    let secondHalfSorted = mergeSort(secondHalf)

    return merge(firstHalfSorted, secondHalfSorted)
  }
}
//   let splitArr = split(arr)
//   let finished = []
//   console.log('splitArr', splitArr)
//   for (let el of splitArr){
//     console.log('el', el)
//     if (el.length === 1){
//       console.log('finished', finished)
//       finished = finished.concat(merge(finished, el))
//       return finished
//     } else {
//       return mergeSort(el)
//     }
//   }
// }


  // if (first.length === 1){
  //   return first
  // } else {
  //   return mergeSort(first)
  // }
    // return mergeSort(arr)
// }

  // function splitting(array) {
  //   if (array.length === 2){
  //     console.log('array', array)
  //     return array
  //   } else {
  //     console.log('split(array)', split(array))

  //     array = splitting(split(array))
  //   }
  // }

  // let splitArrs = splitting(start)

  // console.log('splitArrs',splitArrs)
  // let first = splitArrs[0]
  // let second = splitArrs[1]
  // let finished = []

  // for (let i = 1; i < splitArrs.length; i++){
  //   console.log('finished', finished)
  //   finished = finished.concat(merge(first, second))
  //   first = finished[0]
  //   second = splitArrs[i]
  // }

  // return finished

// }

