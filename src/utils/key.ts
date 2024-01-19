const characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const keyLength = 12;

const getKey = () => {
  let key = "";

  for (let i = 0; i < keyLength; i++) {
    const randomNumer = Math.floor(Math.random() * characters.length);

    key += characters[randomNumer];
  }

  return key;
};

export default getKey
