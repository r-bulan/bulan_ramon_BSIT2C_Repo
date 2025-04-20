/* 
**Sequence**
Input: Read, Obtain, Get
Output: Print, Display, Show
Compute: Compute, Calculate, Determine
Initialize: Set, Init
Add: Incrementa, Bump
Sub: Decrement

**For**
For: iteration, bounds, sequence
Endfor

**While**
While: condition, Sequence
Endwhile

**Case**
Case: Expression OF
Condition1: sequence 1
Condition 2: sequence 2
...
Condition n: Sequence n
Others: default sequence
Endcase

**Repeat-Until**
Repeat: Sequence
Until: Condition

**If-Then-Else**
If condition Then 
    sequence 1
Else
    senquence2
Endif
*/

// **Example 1**
/* 
1. Start
2. Create a function named calculateDiscount
3. Create a parameter named totalPurchase
4. Create a parameter named isMember
5.  If the purchase is over $100 and customer is a Member, apply a 20% Discount and return total price minus discounted price
6.  If the purchase is over $50 and customer is either a member or not, apply 10% Discount and return total price minus discounted price
7.  ENDIF return totalPurchase
8. End


function calculatedDiscont(totalPurchase, isMember) {
  if (totalPurchase > 100 && isMember) {
    discountPrice = totalPurchase * 0.2;
    totalPrice = totalPurchase - discountPrice;
    return totalPrice;
  } else if (totalPurchase > 50) {
    discountPrice = totalPurchase * 0.1;
    totalPrice = totalPurchase - discountPrice;
    return totalPrice;
  } else {
    return totalPurchase;
  }
}

console.log(calculatedDiscont(120, true));
console.log(calculatedDiscont(60, false));
console.log(calculatedDiscont(40, false));
*/

// **Example 2**
/* 
1. Start
2. Create a function for checkVotingEligibility that takes age(Int) and country(string)
3.  If country is USA and age greater than or equal to 18 return Eligible to vote in USA
4.  If country is Canada and age is greater than or equal to 19 return Eligible to vote in Canada
5.  ENDIF return Not eligible to vote
6. End


function checkVotingEligibility(age, country) {
  if (country === 'USA' && age >= 18) {
    return 'Eligible to vote in USA';
  } else if (country === 'Canada' && age >= 19) {
    return 'Eligible to vote in Canada';
  } else {
    return 'Not eligible to vote';
  }
}

console.log(checkVotingEligibility(20, 'USA'));
console.log(checkVotingEligibility(17, 'Canada'));
*/

// **Example 3**
/* 
1. Start
2. Create a function for weatherAdvice that takes temperature(Int) and isRaining(Bool)
3.  If temperature is less than 10 return Wear a heavy jacket
4.  If temperature is between 10 and 20 and isRaining return Bring an umbrella
5.  ENDIF return Enjoy the weather
6. End


function weatherAdvice(temperature, isRaining) {
  if (temperature < 10) {
    return 'Wear a heavy jacket';
  } else if (temperature >= 10 && temperature <= 20 && isRaining) {
    return 'Bring an umbrella';
  } else {
    return 'Enjoy the weather';
  }
}

console.log(weatherAdvice(8, false));
console.log(weatherAdvice(15, true));
console.log(weatherAdvice(15, false));
*/

// **Example 4**
// function calculateArea(r) {
//   var area;
//   if (r <= 0) {
//     return 0;
//   } else {
//     area = Math.PI * r * r;
//     return area;
//   }
// }

// var radius = 5.2;
// var theArea = calculateArea(radius);

// console.log('The area is: ' + theArea);
