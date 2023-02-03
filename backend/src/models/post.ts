import { InferSchemaType, model, Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String },
    image: { type: String },
    text: { type: String },
  },
  { timestamps: true },
);

type Post = InferSchemaType<typeof postSchema>;

export default model<Post>("Post", postSchema);
