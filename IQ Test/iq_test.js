function iqTest(numbers){
  // ...
  let even = [];
  let odd = [];
  nums = numbers.split(' ')
  Array.prototype.forEach.call(nums, num => {
    if (num % 2 == 0) even.push(num);
    else if (num % 2 != 0) odd.push(num);
  });
  /*console.log(even);
  console.log(even.length);
  console.log(odd);
  console.log(odd.length);*/

  if (odd.length == 1) return nums.indexOf(odd[0])+1
  else return nums.indexOf(even[0])+1
}
