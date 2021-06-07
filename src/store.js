import { applyMiddleware, createStore } from 'redux';
import Reducer from './redux/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    Reducer,
    composeWithDevTools()
);

// store.dispatch({ type: 'user/userLogin' });


export default store;