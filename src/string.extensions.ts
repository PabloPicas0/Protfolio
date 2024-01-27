interface String {
  toPascalCase(): string;
}

String.prototype.toPascalCase = function () {
  return this.split(" ")
    .map((str) => {
      return str.replace(str[0], str[0].toUpperCase());
    })
    .join(" ");
};
