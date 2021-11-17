interface ErrorContainer {
  // houseNumber: 123123 // can not assign to number, since it's expecting a string
  houseNumber: "this is ok";
  // I can put as many keys/props as I want because of the index property, but those have to be of [key: string]: string; type
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  // houseNumber: "This is a house number" // this is wrong, since it's expecting a "this is ok" string
  houseNumber: "this is ok",
  email: "This email is not valid",
  password: "This password is not valid",
  234: "This combination is not allowed" // I can put number, since it's converted to string
};
