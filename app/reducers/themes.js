import { CHANGE_PRIMARY_COLOR, changePrimaryColor } from "../actions/themes";

const initialState = {
  primaryColor: "#4f6f7a"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color
      };
    default:
      return state;
  }
};
