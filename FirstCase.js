
function oddishOrEvenish(num) {
    //num is converted to string array.
    const strArray = Array.from(String(num));
    //string array is converted to number array
    const numberArray = strArray.map(str => Number(str));
    total=0;
    numberArrayLength=numberArray.length
    //All elements of the array are addition in a loop
    for(i = 0; i < numberArrayLength; i++) {
        total+=numberArray[i];
    }
    //The value to be returned is determined by taking the mode
    if(total%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
  }
console.log(oddishOrEvenish(1234)); 