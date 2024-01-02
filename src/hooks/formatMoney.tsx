export const formatNumberDecimal = (number: number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(3) + " M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(2) + " K";
  } else {
    return number;
  }
};
