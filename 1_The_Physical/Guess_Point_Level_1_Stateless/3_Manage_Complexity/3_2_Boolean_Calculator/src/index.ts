const tokenize = (expression: string, delimiter: string): string[] => {
  return expression.split(delimiter)
}

const applyAndOperation = (values: string[]): boolean => {
  return values.every((value) => value === "TRUE");
};

const applyOrOperation = (values: string[]): boolean => {
  return values.some((value) => value === "TRUE");
};

const applyOrAndOperation = (tokens: string[]): boolean => {
  let orIndex = tokens.indexOf("OR");
  if (orIndex !== -1) {
    const leftOperand = tokens.slice(0, orIndex);
    const rightOperand = tokens.slice(orIndex + 1);
    return applyOrOperation(leftOperand.concat(rightOperand));
  }

  let andIndex = tokens.indexOf("AND");
  if (andIndex !== -1) {
    const leftOperand = tokens.slice(0, andIndex);
    const rightOperand = tokens.slice(andIndex + 1);
    return applyAndOperation(leftOperand.concat(rightOperand));
  }

  return tokens[0] === "TRUE";
};

const applyNotExpression = (tokens: string[]): string[] => {
  let index = 0;
  while (index < tokens.length) {
    const currentToken = tokens[index];

    if (currentToken === "NOT") {
      const nextToken = tokens[index + 1];

      if (nextToken === "TRUE") {
        tokens[index + 1] = "FALSE";
      } else if (nextToken === "FALSE") {
        tokens[index + 1] = "TRUE";
      }

      tokens.splice(index, 1);
    } else {
      index++;
    }
  }

  return tokens;
}


export const booleanCalculator = (expression: string) => {

  if (expression.includes("NOT")) {
    const tokens = tokenize(expression, " ");
    let result = applyNotExpression(tokens);
    expression = result.join(' ');
  }

  if (expression.includes("AND") || expression.includes("OR")) {
    const tokens = tokenize(expression, " ");
    return applyOrAndOperation(tokens)
  }

  if (expression === "TRUE") return true;
  if (expression === "FALSE") return false;
};