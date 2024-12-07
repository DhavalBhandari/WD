const initialState = {
  users: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload, error: null };

    case "USERS_ERROR":
      return { ...state, error: action.payload };

    case "DELETE_USERS":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case "ADD_USERS":
      return { ...state, users: [...state.users, action.payload] };

    case "UPDATE_USERS":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    default:
      return state;
  }
};

export default userReducer;
