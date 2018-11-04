export default function selectBeverage( beverageInfo ) {
  return {
    type: "SELECT_BEVERAGE",
    beverageInfo,
  }
};