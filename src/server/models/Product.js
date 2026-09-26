import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, index: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0, index: true },
    category: { type: String, required: true, index: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Text index for powerful full-text search across title and description
productSchema.index({ title: "text", description: "text", category: "text" });

export default mongoose.model("Product", productSchema);
