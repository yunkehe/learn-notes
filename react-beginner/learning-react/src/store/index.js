import { createStore } from "redux";
const reducer = (previousState = 0, action) => {
	switch (action.type) {
		case 'LIKE':
			return previousState + 1;
		case 'UNLIKE':
			return previousState - 1;
		default:
			return previousState;
	}
}

const store = createStore(reducer);

export default store;
