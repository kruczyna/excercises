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
// the wildcard . in a regular expression matches any character
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

/[^aeiou]/gi; // matches all characters that are not a vowel

// Match Characters that Occur One or More Times
let difficultSpelling = 'Mississippi';
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);
console.log(result); // [ 'ss', 'ss' ]

// Match Characters that Occur Zero or More Times
let soccerWord = 'gooooooooal!';
let gPhrase = 'gut feeling';
let oPhrase = 'over the moon';
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
// In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

const regex = /t[a-z]*?i/;
// you can use the ? character to change it to lazy matching.
// "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

// Outside of a character set, the caret is used to search for patterns at the beginning of strings.
let firstString = 'Ricky is first and can be found.';
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// The first test call would return true, while the second would return false.

// You can search the end of strings using the dollar sign character $ at the end of the regex.
let theEnding = 'This is a never ending story';
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = 'Sometimes a story will have to end';
storyRegex.test(noEnding);
// The first test call would return true, while the second would return false.

// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;

let quoteSample = 'The five boxing wizards jump quickly.';
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length; // 31

// Match Everything But Letters and Numbers
// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
let quoteSample = 'The five boxing wizards jump quickly.';
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length; // 6

// Match All Numbers
// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9]
let movieName = '2001: A Space Odyssey';
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

//Match All Non-Numbers
//The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
let movieName = '2001: A Space Odyssey';
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;
