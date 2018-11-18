export default function selectBeverage(beverageDetails) {
  return {
    type: 'SELECT_BEVERAGE',
    beverageDetails,
  };
}
