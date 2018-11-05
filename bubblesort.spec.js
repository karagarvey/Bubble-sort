describe('Bubble Sort', function(){
  beforeAll(function() {
    spyOn(window,'swap').and.callThrough();
  })
  it('handles an empty array', function(){
    expect( bubbleSort( [] ).toEqual( [] ));
  })

  it('handles an array with 1 element',function(){
    expect (bubbleSort( [1] ).toEqual( [1] ));
  })

  it('handles an array for multiple items', function(){
    let myArr = [2, 5, 3]
    expect (bubbleSort( myArr) ).toEqual( [2, 3, 5]);
    expect (window.swap.calls.count()).toEqual(1);
    myArr.push(23)
    myArr.push(56)
    myArr.push(34)
    myArr.push(16)
    expect (bubbleSort( myArr) ).toEqual( [2, 3, 5, 16, 23, 34, 56])
    expect (window.swap.calls.count()).toEqual(5);
  })
})
