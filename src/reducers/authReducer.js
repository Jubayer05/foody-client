/* eslint-disable no-undef */
export default (state = { authData: null }, action) => {
  switch (action.type) {
    case 'AUTH':
      sessionStorage.setItem('profile', JSON.stringify({ ...action.payload }));
      return { ...state, authData: action.payload };

    case 'LOGOUT':
      sessionStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};
