alert("Let's integrate!")
function leftRiemannSum(func, a, b, n) {
    const dx = (b - a) / n;
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      const x = a + i * dx;
      sum += func(x);
    }
  
    return sum * dx;
  }
const userFunction = prompt("Enter a function to integrate (e.g., 'x*x' or 'Math.sin(x)'):");
const func = new Function('x', `return ${userFunction}`);
const lowerLimit = parseFloat(prompt("Enter the lower limit of integration:"));
const upperLimit = parseFloat(prompt("Enter the upper limit of integration:"));
const partitions = parseInt(prompt("Enter the number of partitions (n):"));

if (isNaN(lowerLimit) || isNaN(upperLimit) || isNaN(partitions)) {
  console.log("Invalid input. Please enter valid numeric values for integration limits and partitions.");
} else {
  const result = leftRiemannSum(func, lowerLimit, upperLimit, partitions);
  document.getElementById('result').innerHTML= result;
  console.log(`The approximate integral of ${userFunction} from ${lowerLimit} to ${upperLimit} is ${result.toFixed(4)}`);
}

