export function idGenerator(): `${string}-${string}-${string}-${string}-${string}` {
  const dictionary =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = 32;
  let id = "";
  for (let i = 0; i < length; i++) {
    id += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
  }
  //shufle again
  let array = id.split("");
  array.sort(() => Math.random() - 0.5);
  id = array.join("");

  //break in groups of 8, like a UUID example: 12345678-1234-1234-1234-123456789012
  return id.replace(
    /(.{8})(.{4})(.{4})(.{4})(.{12})/,
    "$1-$2-$3-$4-$5"
  ) as `${string}-${string}-${string}-${string}-${string}`;
}
