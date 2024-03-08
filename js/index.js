console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "John Snow";
console.log(hacker1);
let hacker2 = "Daenerys Targaryen";
console.log(hacker2);
// Iteration 2: Conditionals
let hacker1_len = hacker1.length;
let hacker2_len = hacker2.length;
if (hacker1_len > hacker2_len) {
  console.log(
    `The driver has the longest name, it has ${hacker1_len} characters.`
  );
} else if (hacker1_len < hacker2_len) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2_len} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1_len} characters!`
  );
}

// Iteration 3: Loops
for (i = 0; i < hacker1_len; i++) {
  console.log(hacker1[i].toUpperCase() + " ");
}
for (i = hacker2_len - 1; i > 0; i--) {
  console.log(hacker2[i] + " ");
}
//3.3 Lexographic Order
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
