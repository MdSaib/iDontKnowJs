let teacher = "Kyle";
let twitterHandle = "getify";
let age = 39;

function whoAmI(myName, myNickName, myAge) {
  console.log(`
  Hi, I'm ${myName} (aka ${myNickName}),
  and I'm ${myAge} years old.
  `);
}

whoAmI(teacher, twitterHandle, age)