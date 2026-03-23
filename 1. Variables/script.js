let a = 10;
let b = a;
let b = 20;
# a is still 10, b is 20.

const name = "Anna"
# cannot assign anything else to the 'name' variable.

In JavaScripts Values are of two types :
1. Primitive Values - number, string, boolean (Copied directly)
2. Reference Values - object{} , array[] (Shared reference)

let a = {score : 10};
let b = a;
b.score = 20;
# Now a.score is also 20
