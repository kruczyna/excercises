let myString = 'Hello, World!';
let myRegex = /Hello/;
myRegex.test(myString); // Find "Hello" in myString

let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/; // Match a Literal String with Different Possibilities
petRegex.test(petString);

let myString = 'freeCodeCamp';
let fccRegex = /freecodecamp/i; // Ignore Case While Matching
fccRegex.test(myString);

'Hello, World!'.match(/Hello/); // returns ["Hello"]

'string'.match(/regex/);
/regex/.test('string');

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
extractStr.match(codingRegex); // ['coding']

// You can have multiple flags on your regex like /search/gi
let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /Twinkle/gi;
twinkleStar.match(starRegex); // Find More Than the First Match via /g

// if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
unRegex.test(exampleStr);

let quoteSample =
  'Beware of bugs in the above code; I have only proved it correct, not tried it.';
let vowelRegex = /[aeiou]/gi; // Match Single Character with Multiple Possibilities
let result = quoteSample.match(vowelRegex);

// It is possible to combine a range of letters and numbers in a single character set.
let jennyStr = 'Jenny8675309';
let myRegex = /[a-z0-9]/gi;
jennyStr.match(myRegex);
