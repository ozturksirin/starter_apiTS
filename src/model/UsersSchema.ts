import mongoose, { Schema } from "mongoose";

interface User {
  name: string;
  email: string;
  password: string;
  passwordAgain: string;
}

const UsersSchema = new Schema<User>({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6, maxlength: 20 },
  passwordAgain: { type: String, required: true, minlength: 6, maxlength: 20 },
});

const User = mongoose.model("User", UsersSchema);
export default User;
