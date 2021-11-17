const fetchedUserData = {
  id: 'u1',
  name: 'Victoria',
  job: {
    title: 'Software Engineer',
    age: 30,
    desc: 'Some description'
  }
};

const userInput3 = '';
const storedData = userInput3 ?? 'DEFAULT'; // this will fall to 'DEFAULT' only when userInput3 is null or undefined

const isThere = fetchedUserData.job?.title; // use ? when you're not sure if you'll receive the data
