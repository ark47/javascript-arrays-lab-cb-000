const app = "I don't do much."

function destructivelyAppendKitten(name) {
  x = kittens.unshift(name);
  kittens.push(x);
  return kittens
}
