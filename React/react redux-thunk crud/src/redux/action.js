import axios from "axios";

export const GET_USERS = "GET_USERS";
export const DELETE_USERS = "DELETE_USERS";
export const ADD_USERS = "ADD_USERS";

export const getUsers = (users) => ({
  type: "GET_USERS",
  payload: users,
});

export const usersError = (error) => ({
  type: "USERS_ERROR",
  payload: error,
});

export const userDeleted = (id) => ({
  type: "DELETE_USERS",
});

export const userAdded = () => ({
  type: "ADD_USERS",
});

export const updateUserSuccess = (user) => ({
  type: "UPDATE_USERS",
  payload: user,
});

// Async action
export const loadUsers = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        if (Array.isArray(response.data)) {
          dispatch(getUsers(response.data));
        } else {
          dispatch(usersError("Invalid data format"));
        }
      })
      .catch((error) => {
        dispatch(usersError(error.message));
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3000/users/${id}`) // Correct interpolation
      .then(() => {
        dispatch(loadUsers()); // Reload users after deletion
      })
      .catch((error) => {
        dispatch(usersError(error.message));
      });
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3000/users", user)
      .then((response) => {
        if (Array.isArray(response.data)) {
          dispatch(userAdded());
        } else {
          dispatch(usersError("Invalid data format"));
        }
      })
      .catch((error) => {
        dispatch(usersError(error.message));
      });
  };
};

export const updateUser = (id, user) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3000/users/${id}`, user) // Correct interpolation of id
      .then((response) => {
        dispatch(updateUserSuccess(response.data)); // Update the state
        dispatch(loadUsers()); // Reload the updated user list
      })
      .catch((error) => {
        dispatch(usersError(error.message));
      });
  };
};
