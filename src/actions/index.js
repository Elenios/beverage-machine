export default function selectBeverage( beverageID ) {
  console.log(beverageID);
  return {
    type: "SELECT_BEVERAGE",
    beverageID,
  }
};