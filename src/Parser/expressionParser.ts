const peg = require("pegjs");
const expressionGrammar = `
  Expression = head:Term tail:(("+" / "-") Term)* {
    return tail.reduce((result, element) => {
      if (element[0] === "+") { return result + element[1] }
      if (element[0] === "-") { return result - element[1] }
    }, head)
  }
  Term = head:Factor tail:(("*" / "/") Factor)* {
    return tail.reduce((result, element) => {
      if (element[0] === "*") { return result * element[1] }
      if (element[0] === "/") { return result / element[1] }
    }, head)
  }
  Factor = "(" expr:Expression ")" { return expr } / Integer
  Integer = [0-9]+ { return parseInt(text(), 10) }
`;
const parser = peg.generate(expressionGrammar);
module.exports = parser;
