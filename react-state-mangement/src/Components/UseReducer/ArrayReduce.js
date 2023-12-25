// Array reduce()
let number = [1, 2, 3, 4, 5, 6, 7]

var sum = number.reduce((previousValue, currentValue,  currentIndex, mainArray) =>{
    return previousValue + currentValue;
}, 0)

console.log(sum)

const data = [
    { category: 'A', value: 10 },
    { category: 'B', value: 20 },
    { category: 'A', value: 30 },
    { category: 'B', value: 40 },
  ];
  
  const groupedData = data.reduce((accumulator, currentItem) => {
    const key = currentItem.category;
    console.log(key)
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
  
    accumulator[key].push(currentItem);
  
    return accumulator;
  }, {});
  
  console.log(groupedData);
  /* Output:
  {
    A: [ { category: 'A', value: 10 }, { category: 'A', value: 30 } ],
    B: [ { category: 'B', value: 20 }, { category: 'B', value: 40 } ]
  }
  */
  