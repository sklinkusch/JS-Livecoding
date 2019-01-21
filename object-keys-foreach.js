const lucy = {
name: "Lucy",
age: 28,
height: 220,
country: "KOR",
origin: "USA"
}

Object.keys(lucy).forEach((key) => {
const association = lucy[key]
console.log(`${key} -> ${association}`)
}
);
