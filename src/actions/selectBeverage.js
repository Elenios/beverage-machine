export default function selectBeverage(beverage) {
  return {
    type: 'SELECT_BEVERAGE',
    beverage,
  }
};