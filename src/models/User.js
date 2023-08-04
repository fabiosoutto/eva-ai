import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    whatsapp: { type: String, required: true },
    company: { type: String, required: true },
    ocupation: { type: String, required: true },
    people: { type: String, required: false },
    password: { type: String, required: true },
    
  },
  { timestamps: true}
);

const modelName = mongoose.models.User || mongoose.model("User", userSchema);

export default modelName;