export function idGenerator(): `${string}-${string}-${string}-${string}-${string}` {
  const dictionary =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = 32;
  //create a seed using the current time
  const seed = Date.now();

  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomChar = Math.floor(Math.random() * dictionary.length);
    randomString += dictionary.charAt(randomChar);
  }

  //shuffle all the characters in the string using the seed
  let shuffledString = "";
  let currentIndex = randomString.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(seed % currentIndex);
    shuffledString += randomString.charAt(randomIndex);
    randomString = randomString.substring(0, randomIndex);
    currentIndex--;
  }

  return `${shuffledString.substring(0, 8)}-${shuffledString.substring(
    8,
    12
  )}-${shuffledString.substring(12, 16)}-${shuffledString.substring(
    16,
    20
  )}-${shuffledString.substring(20, 32)}`;
}
