import { createStore ,applyMiddleware,compose} from "redux";
import TaskReducers from "./Tasks/TasksReducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(TaskReducers,composeEnhancers(applyMiddleware(thunk)));

export default Store;