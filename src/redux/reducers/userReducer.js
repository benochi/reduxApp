const initialState = { name: "User 1", age: 23}

const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGEUSERNAME": {
      return { ...state, name: action.payload };
    }
    case "CHANGEAGE": {
      return { ...state, age: action.payload};
    }
  }
  return state;
}
export default addUserReducer;