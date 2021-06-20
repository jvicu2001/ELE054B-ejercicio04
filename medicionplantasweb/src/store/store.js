import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {medicionesReducer} from '../reducers/medicionesReducer';
const composeEnhancers = (typeof window !== 'undefined'
    && window.__REDUX_DEV_TOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    mediciones: medicionesReducer,
    //usuarios: usuariosReducer,
    //plantas: plantasReducer
});

export const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));