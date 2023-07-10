const tokenize = (expression: string, delimiter: string) => {
  return expression.split(delimiter);
}

const applyParensOperation = (expression: string): string => {
  let result = expression;

  let startIndex = result.lastIndexOf("(");
  let endIndex = result.indexOf(")", startIndex);

  while (startIndex !== -1 && endIndex !== -1) {
    const subExpression = result.substring(startIndex + 1, endIndex);
    const subResult = evaluateExpression(subExpression);

    const beforeParens = result.substring(0, startIndex);
    const afterParens = result.substring(endIndex + 1);

    result = `${beforeParens}${subResult}${afterParens}`;

    startIndex = result.lastIndexOf("(");
    endIndex = result.indexOf(")", startIndex);
  }

  return result;
};

const applyNotOperation = (tokens: string[]): string => {
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

  return tokens.join(' ');
}

const evaluateExpression = (expression: string): string => {
  expression = applyParensOperation(expression);
  let tokens = tokenize(expression, " ")
  tokens = tokenize(applyNotOperation(tokens), ' ');
  return applyOrAndOperation(tokens) ? "TRUE" : "FALSE";
};

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

export const booleanCalculator = (expression: string): boolean => {
  return evaluateExpression(expression) === "TRUE";
};