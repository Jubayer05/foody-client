export default (allUserData = [{ name: 'Jubayer' }], action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.payload;

    default:
      return allUserData;
  }
};
