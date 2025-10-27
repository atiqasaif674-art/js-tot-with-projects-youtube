let score = 33

// const {score} = req.body 
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33 easy convert
//"33abc" => Nan no easyily con
//true => 1 //false =>0
//null => obj //undefined => undefined

let isLoggdIn = 1

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 =>true //0 => false //null =>false
//"atiqa" =>true
//"" =>false

let someNumber = 33

let stringNumber =String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
