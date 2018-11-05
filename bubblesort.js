function bubbleSort(array){
  let swapped = false
  for (let i = 0; i < array.length - 1; i++){
    if (array[i] > array[i + 1]){
      array = swap(array, i)
      swapped = true
    }
  }
  if (swapped){
    return bubbleSort(array)
  } else {
    return array
  }
}

function swap (array, index){
  let temp = array[index]
  array[index] = array[index + 1]
  array[index + 1] = temp
  return array
}
