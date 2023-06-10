
export const booleanCalculator = (expression: string) => {

  if (expression.includes("AND")) {
    return expression
      .split(" AND ")
      .every(operator => operator === "TRUE");
  } 
  if (expression.includes("OR")) {
    return expression
      .split(" OR ")
      .some(operator => operator === "TRUE");
  }
  if (expression === "NOT FALSE") return true;
  if (expression === "NOT TRUE") return false; 
  if (expression === "TRUE") return true;
  if (expression === "FALSE") return false;
};