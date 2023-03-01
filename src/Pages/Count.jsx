import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import user from '../action/user';

export default function Count() {
  const counter = useSelector((state) => state.Counter.counter);
  const curUser = useSelector((state) => state.curUser);
  const dispatch = useDispatch();
  const user1 = { name: 'Kaif' };
  React.useEffect(() => {
    dispatch(user.logIn(user1));
  }, []);
  return (
    <>

      {curUser.loggedIn
        ? (
          <>
            <h1>
              Hello,
              {curUser.user.name}
            </h1>
            <button type="button" onClick={() => dispatch(user.logOut())}>Logout</button>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <button type="button" onClick={() => dispatch(user.logIn(user1))}>Login</button>
          </>
        )}
      <div>
        count :
        {' '}
        { counter }
      </div>
    </>

  );
}
