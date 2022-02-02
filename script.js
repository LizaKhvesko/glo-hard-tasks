let arr = ['12345', '23456', '34567', '45678', '573567', '56753', '4332456'];
for (let i=0; i<arr.length; i++) {
    if(arr[i][0] === '2' || arr[i][0] === '4') {
        console.log(arr[i]);
    } else {
        continue;
    }
}

number:
for (let i = 2; i <= 100; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue number; 
  }

  console.log( i + ` Делители этого числа 1 и ${i}` ); 
}