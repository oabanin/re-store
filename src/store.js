import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const logMiddleware = ({ getState }) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action);
}

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === "string") {
        return next({ type: action })
    }
    return next(action);
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

/* const myAction = (dispatch) => {
    setTimeout(() => {
        dispatch({ type: "DELAYED_ACTION" })
    }, 2000);
}; */

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => {
        dispatch({ type: "DELAYED_ACTION" })
    }, timeout);
};

store.dispatch(delayedActionCreator(3000 ))

//store.dispatch('HELLO_WORLD');



//store.dispatch({ type: 'INCREMENT' })





//BAD PRACTIcE FROM STACKOVERFLOW because you cant't use SERVER RENDERING with this code



function showNotification(id, text) {
    console.log(id, text);
    return { type: 'SHOW_NOTIFICATION_WITH_THUNK', id, text }
  }
  function hideNotification(id) {
    return { type: 'HIDE_NOTIFICATION_WITH_THUNK', id }
  }



/* 
WITHOUT THUNK

function showNotificationWithTimeout(text) {
    const id = nextNotificationId++
    store.dispatch(showNotification(id, text))
  
    setTimeout(() => {
      store.dispatch(hideNotification(id))
    }, 5000)
  } 
  
  =============
  WITH THUNK


  */
 let nextNotificationId = 0; 
 function showNotificationWithTimeout(text) {
    return function (dispatch) {
      const id = nextNotificationId++
      dispatch(showNotification(id, text))
  
      setTimeout(() => {
        dispatch(hideNotification(id))
      }, 5000)
    }
  }
  
showNotificationWithTimeout('You just logged in.')(store.dispatch);
 showNotificationWithTimeout('You just logged out.')    (store.dispatch);




/* store.dispatch({ type: 'SHOW_NOTIFICATION', text: 'You logged in.' })
setTimeout(() => {
  store.dispatch({ type: 'HIDE_NOTIFICATION' })
}, 5000) */



export default store;