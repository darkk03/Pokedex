import { createStore } from 'redux';
import rootReducer from '../feauters/rootReducer/rootReducer';


const store = createStore(rootReducer);

export default store;