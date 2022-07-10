# Closures-in-Javascript

### Definition

##### #1 

A closure is a function that references variables in the outer scope from its inner scope. The inner function need variable in its parent scope (lexical scope). 

Inner function yang membutuhkan variable di parent scope-nya (lexical scope) disebut closure.
     
       * https://github.com/dwi-handoyo/Closures-in-Javascript/blob/main/Closures-Learn-In-7-Minutes.js
       * https://github.com/dwi-handoyo/Closures-in-Javascript/blob/main/Example-Closure-1.js

##### #2

Closures = function having access to parent scope(1) + even after parent function been closed(2)

This to show lexical scope which is very important in closures (1) and the closure preserve the variable after parent function is closed (2).

      * https://github.com/dwi-handoyo/Closures-in-Javascript/blob/main/Closures-Lexical-Scope.js

### Typical Format

#### 1-Function Expression without IIFE (Immediately Invoke Function Expression)

            let add = function() {
                  let counter = 0;
                  return function(){     
                        return ++counter;  
                  }
            }
  
            let result = add();
            console.log(result());
            console.log(result());
            console.log(result());  

        * https://github.com/dwi-handoyo/Closures-in-Javascript/blob/main/Counter-with-Reset-No-IIFE.html
        * https://github.com/dwi-handoyo/Closures-in-Javascript/blob/main/Example-Closure-3.js
        
#### 2-Function Expression with IIFE (Immediately Invoke Function Expression)

            let add = (function() {
                  let counter = 0;
                  return function(){     
                     return ++counter;  
                  }
            })();

            console.log(add());
            console.log(add());
            console.log(add());

       * https://github.com/dwi-handoyo/Closures-in-Javascript/blob/main/Counter-with-Reset-IIFE.html
       * https://github.com/dwi-handoyo/Closures-in-Javascript/blob/main/Closures-IIFE.js
       * https://github.com/dwi-handoyo/Closures-in-Javascript/blob/main/Example-Closure-3.js

#### 3-Function Declaration

            function counter(){
                  let count = 0;
                  function accumulation(){
                     return ++count;
                  }
                  return accumulation;
            }
  
            let result = counter();  
            console.log(result());
            console.log(result());
            console.log(result());

       * https://github.com/dwi-handoyo/Closures-in-Javascript/blob/main/Example-Closure-1.js
       * https://github.com/dwi-handoyo/Closures-in-Javascript/blob/main/Example-Closure-2.html (HTML example)
       
       
#### 4-Arrow Function
            
       * https://github.com/dwi-handoyo/Closures-in-Javascript/blob/main/Closures-IIFE.js
            




