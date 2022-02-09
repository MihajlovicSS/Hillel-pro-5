'use strict';
function Calculator() {
    this.countSum = 0;
    this.countSubtract = 0;
    this.countPow = 0;
    this.countMultiply = 0;
    this.countDivide = 0;
    this.lastOperation = '';
    this.lastOPerationResult; 
    this.sum = function(num1, num2){
        let result = num1 + num2;
        this.countSum++;
        this.lastOperation = 'sum';
        this.lastOPerationResult = result;
        return result;
    }
    this.subtract = function(num1, num2){
        let result = num1 - num2;
        this.countSubtract++;
        this.lastOperation = 'subtract';
        this.lastOPerationResult = result;
        return result;
    }
    this.pow = function(num1, num2){
        let result = num1 ** num2;
        this.countPow++;
        this.lastOperation = 'pow';
        this.lastOPerationResult = result;
        return result;
    }
    this.multiply = function(num1, num2){
        let result = num1 * num2;
        this.countMultiply++;
        this.lastOperation = 'multiply';
        this.lastOPerationResult = result;
        return result;
    }
    this.divide = function(num1, num2){
        let result = num1 / num2;
        this.countDivide++;
        this.lastOperation = 'divide';
        this.lastOPerationResult = result;
        return result;
    }
    this.getMethodCallCount = function(nameOfMethod){
        let count;
        switch (nameOfMethod){
            case 'sum':
                count = this.countSum;
                break;
            case 'subtract':
                count = this.countSubtract;
                break;
            case 'pow':
                count = this.countPow;
                break;
            case 'multiply':
                count = this.countMultiply;
                break;
            case 'divide':
                count = this.countDivide;
                break;
        }
        return count;
    }
    this.getLastOperation = function(){
        return 'method: ' + this.lastOperation + ', result: ' + this.lastOPerationResult;
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
