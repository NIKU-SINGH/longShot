import mongoose from "mongoose";

const { Schema } = mongoose;

const storageSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  refrigeration: {
    type: Boolean,
    default: false,
  },
  maxLimit: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('storageSpace', storageSchema);

