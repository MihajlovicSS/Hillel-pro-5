function Calculator() {
    this.lastOPerationResult = {}; 
    //Number of Calls
    this.methodsData = {     
        'sum': 0,
        'subtract': 0,
        'pow': 0,
        'multiply': 0,
        'divide': 0,
    }
    this.sum = function(num1, num2){
        let result = num1 + num2;
        this.updateData('sum', result);
        return result;
    }
    this.subtract = function(num1, num2){
        let result = num1 - num2;
        this.updateData('subtract', result);
        return result;
    }
    this.pow = function(num1, num2){
        let result = num1 ** num2;
        this.updateData('pow', result);
        return result;
    }
    this.multiply = function(num1, num2){
        let result = num1 * num2;
        this.updateData('multiply', result);
        return result;
    }
    this.divide = function(num1, num2){
        let result = num1 / num2;
        this.updateData('divide', result);
        return result;
    }
    this.getMethodCallCount = function(nameOfMethod){
        return this.methodsData[nameOfMethod];
     }
    this.updateData = function(method, result){
        this.methodsData[method]+=1;
        this.lastOPerationResult = {method, result};
    }
    this.getLastOperation = function(){
        return 'method: ' + this.lastOPerationResult.method + ', result: ' + this.lastOPerationResult.result;
    }
} 

const calculator = new Calculator();
console.log(calculator.sum(10, 5)); // 15 
console.log(calculator.sum(20, 5)); // 25
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.pow(2, 3)); // 8
console.log(calculator.multiply(2, 3)); // 6
console.log(calculator.divide(6, 2)); // 3 
console.log(calculator.pow(3, 9));  
console.log(calculator.getMethodCallCount("sum")); // 2
console.log(calculator.getMethodCallCount("subtract")); // 1    
console.log(calculator.getLastOperation()); // { method 'divide', result: 3 } 