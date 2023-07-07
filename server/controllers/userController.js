// import mongoose from "mongoose";
// import User from "../models/userModel.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";


// export const getUser = async (req, res) => {
//   const { _id, username } = await User.findById(req.user.id);

//   res.status(200).json({
//     id: _id,
//     username,
//   })
// };

// // Register a new user
// export const registerUser = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if the username already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "Username already exists" });
//     }

//     //Hash the password
//     const salt = await bcrypt.genSalt(10);
//     // Create a new user
//     const hashedPassword = await bcrypt.hash(password, salt);
//     const newUser = await User.create({ username, password: hashedPassword });

//     if (newUser) {
//       res.status(201).json({
//         _id: newUser._id,
//         username: newUser.username,
//         token: generateToken(newUser._id)
//       });
//     }
    
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred" });
//   }
// };

// // Login a user
// export const loginUser = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if the user exists
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // Check if the provided password is correct
//     const isPasswordCorrect = await bcrypt.compare(password, user.password);
//     if (!isPasswordCorrect) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     res.status(200).json({
//         _id: user._id,
//         username: user.username,
//         token: generateToken(user._id)
//       });
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred" });
//   }
// };

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d"})
// }

// export const logoutUser = async (req, res) => {
//   try {
//     // Clear the token by setting it to null or removing it from the client-side storage
//     // For example, if you are using localStorage, you can clear the token like this:
//     localStorage.removeItem("token");

//     res.status(200).json({ message: "Logout successful" });
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred" });
//   }
// };
