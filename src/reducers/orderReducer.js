export default (allOrder = [], action) => {
  switch (action.type) {
    case 'FETCH_ORDER':
      return action.payload;

    default:
      return allOrder;
  }
};
