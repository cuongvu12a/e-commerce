export const replaceArrayNumberFromText = (text: string, numbers: number[]) => {
  numbers.forEach((el) => (text = text.replace('${number}', el.toString())));
  return text;
};
