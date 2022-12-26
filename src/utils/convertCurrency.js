export default function convertCurrency(val) {
  if (val) {
    const sign = "$ ";
    const number = typeof val === "number" ? val.toString() : val;
    return sign + number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  if (val === 0) {
    return "$ 0";
  }
  return null;
}
