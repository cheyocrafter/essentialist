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


export const booleanCalculator = (expression: string) => {

  if (expression.includes("AND") || expression.includes("OR")) {
    const tokens = tokenize(expression, " ");
    return applyOrAndOperation(tokens)
  }

  if (expression === "NOT FALSE") return true;
  if (expression === "NOT TRUE") return false; 
  if (expression === "TRUE") return true;
  if (expression === "FALSE") return false;
};