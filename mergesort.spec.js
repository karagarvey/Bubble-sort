describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    let myArr = [3, 4, 5, 7, 2]
    expect(split(myArr)).toEqual([[3, 4],[5, 7, 2]]);
    expect(split([3, 4])).toEqual([[3], [4]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  });
});

describe('mergeSort function', function (){
  it('is able to merge sort an array', function(){
    expect(mergeSort([3, 1, 5, 6])).toEqual([1, 3, 5, 6]);
  })
})
