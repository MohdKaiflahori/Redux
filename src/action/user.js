const logIn = (userObj) => ({
  type: 'logIn',
  payload: userObj,
});
const logOut = () => ({
  type: 'logOut',
});
export default {
  logIn,
  logOut,
};
