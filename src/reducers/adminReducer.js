export default (admin = {}, action) => {
  switch (action.type) {
    case 'IS_ADMIN':
      // eslint-disable-next-line no-undef
      sessionStorage.setItem('admin', JSON.stringify({ ...action.payload }));
      return { ...admin, adminData: action.payload };

    case 'ADD_ADMIN':
      return [action.payload];
    default:
      return admin;
  }
};
