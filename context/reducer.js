export const initialState = {
  theme: false,
  form: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FORM":
      console.log("nay");
      return { ...state, form: !state.form };
    default:
      return state;
  }
};

export default appReducer;
