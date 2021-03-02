import mongoose from "mongoose"

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
)

const Category = mongoose.model("Category", categorySchema)

export default Category
