

export const booleanCalculator = (expression: string) => {
  if (expression === "NOT FALSE") return true; 
  if (expression === "NOT TRUE") return false; 
  if (expression === "TRUE") return true;
  if (expression === "FALSE") return false;
};