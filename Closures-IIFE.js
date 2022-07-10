
// CLOSURE - IIFE (Immediately Invoked Function Expression)

const privateCounter = (() => {
   let count = 0;
   console.log(`Initial value: ${count}`);
   return () => { count += 1; console.log(count) }
})();

privateCounter();
privateCounter();
privateCounter();

//output:
//Initial value: 0
//1
//2
//3

const credits = ((num) => {
  let credits = num;
  console.log(`Initial credits value: ${credits}`);
  return () => {
    credits -= 1;
    if (credits > 0) console.log(`playing game, ${credits} credit(s) remaining`);
    if (credits <= 0) console.log(`not enough credits`);
  }
})(3);

credits();
credits();
credits();

//output:
//Initial credits value: 3
//playing game, 2 credit(s) remaining
//playing game, 1 credit(s) remaining
//not enough credits

