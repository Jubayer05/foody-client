import * as api from '../api';

export const findAdmin = (email) => async (dispatch) => {
  try {
    const { data } = await api.findAdmin(email);

    dispatch({ type: 'IS_ADMIN', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addAdmin = (adminInfo) => async (dispatch) => {
  try {
    const { data } = await api.addAdmin(adminInfo);

    dispatch({ type: 'ADD_ADMIN', payload: data });
  } catch (error) {
    console.log(error);
  }
};
