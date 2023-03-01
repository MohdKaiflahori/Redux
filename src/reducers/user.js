/* eslint-disable default-param-last */
const curUser = (state = {}, action) => {
  switch (action.type) {
    case 'logIn':
      return {
        ...state,
        user: action.payload,
        loggedIn: true,

      };

    case 'logOut':
      return {
        ...state,
        user: {},
        loggedIn: false,

      };

    default: return state;
  }
};
export default curUser;
