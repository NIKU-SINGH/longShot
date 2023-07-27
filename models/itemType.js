import mongoose from "mongoose";

const { Schema } = mongoose;

const itemTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  refrigeration: {
    type: Boolean,
    default: false,
  },
  itemList : [{type: Schema.Types.ObjectId, ref: 'item'}]
},{timestamps:true});

export default mongoose.model("itemType", itemTypeSchema);
