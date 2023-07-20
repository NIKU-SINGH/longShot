import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  refrigeration: {
    type: Boolean,
    default: false,
  },
  itemType: {
    // type: Schema.Types.ObjectId,
    type: String,
    ref: "itemType",
    required: true,
  },
  storageSpace: {
    // type: Schema.Types.ObjectId,
    type: String,
    ref: "storageSpace",
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
    immutable: true,
    validate: {
      validator: (date) => date > Date.now(),
      message: "Expiration date must be in the future.",
    },
  },
});

export default mongoose.model("item", itemSchema);

