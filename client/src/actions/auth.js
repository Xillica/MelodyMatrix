// import * as api from "../api";

// export const getUser = () => async (dispatch) => {
//   try {
//     const user = await api.getUser();
//     console.log(user);

//     if (!user) {
//       // Handle the case when the user is not found
//       console.log("User not found!");
//       // Display an error message or take appropriate action
//     } else {
//       dispatch({ type: "FETCH_USER", payload: user });
//     }
//   } catch (error) {
//     console.log(error);
//     // Handle other errors, such as network errors or server errors
//   }
// };

// export const registerUser = (userData) => async (dispatch) => {
//   try {
//     await api.registerUser(userData);
//     dispatch({ type: "REGISTER_SUCCESS" });
//     // Handle success, such as showing a success message or redirecting to the login page
//   } catch (error) {
//     dispatch({ type: "REGISTER_FAILURE", payload: error.message });
//     // Handle error, such as displaying an error message
//   }
// };

// export const loginUser = (userData) => async (dispatch) => {
//   try {
//     const response = await api.loginUser(userData);
//     dispatch({ type: "LOGIN_SUCCESS", payload: response.data.userId });
//     // Handle success, such as saving the user token to localStorage or redirecting to the dashboard
//   } catch (error) {
//     dispatch({ type: "LOGIN_FAILURE", payload: error.message });
//     // Handle error, such as displaying an error message
//   }
// };

// export const logoutUser = () => async (dispatch) => {
//   try {
//     await api.logoutUser();
//     dispatch({ type: "LOGOUT_SUCCESS" });
//     // Handle success, such as clearing user data from localStorage or redirecting to the login page
//   } catch (error) {
//     dispatch({ type: "LOGOUT_FAILURE", payload: error.message });
//     // Handle error, such as displaying an error message
//   }
// };
