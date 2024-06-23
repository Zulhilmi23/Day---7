console.log("hello,World!");

// 3. Operation - Math
let a = 10;
let b = 30;
let c = a + b;
console.log(c);

// 4. Operation -String concatenation
let firstName = "Joh";
let lastName = "Doe";
let fullName = firstName + lastName;
console.log(fullName);

let mix = a + firstName;
console.log(mix);

// 5. Operation - Comparison
let x = 10;
let y = 10;
console.log(x > y); // 10 > 20
console.log(x < y); // 10 < 20
console.log(x >= y);
console.log(x <= y);

// 6. Operator - Equality
let p = 10;
let q = "10";
let r = 11;
console.log(p == r);
console.log(p == q);
// deep quality - same value and same type
console.log(p === r);
console.log(p === q);

//inequality
console.log(p != r);
console.log(p != q);
// deep inequality - different value or different type
console.log(p !== r);

// 7. Truthy and Falsy
let t = true;
let f = false;
console.log(t, f);

let num = 0;
let num2 = 1;
console.log(Boolean(num)); //false = 0 in Boolean is False
console.log(Boolean(num2)); // true = Other than 0 is True

let str = "";
let str2 = " ";
let str3 = "Hello, World!";
console.log(Boolean(str)); //false
console.log(Boolean(str2)); //false
console.log(Boolean(str3)); //true
