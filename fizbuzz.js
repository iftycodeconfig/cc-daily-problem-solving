function FizzBuzz(myNumber) {
  let i = 1;
  let Fizz = 0;
  let Buzz = 0;

  while (i <= myNumber) {
    Fizz++;
    Buzz++;
    
    let output = "";
    if (Fizz === 3) {
      output += "Fizz";
      Fizz = 0;
    }

    if (Buzz === 5) {
      output += "Buzz";
      Buzz = 0;
    }

    if (output === "") {
      console.log(i);
    } else {
      console.log(output);
    }

    i++;
  }
}

FizzBuzz(100);
