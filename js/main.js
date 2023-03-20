function firstFunctionLoop(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
	  sum += i;
	}
	return sum;
 }
 
 function secondFunctionRecursion(n) {
	if (n === 1) {
	  return 1;
	} else {
	  return n + secondFunctionRecursion(n - 1);
	}
 }
alert(`Результат с помощью цикла - ${firstFunctionLoop(100)}`);
alert(`Результат с помощью рекурсии - ${secondFunctionRecursion(100)}`);
console.log(firstFunctionLoop(100)); 
console.log(secondFunctionRecursion(100)); 


