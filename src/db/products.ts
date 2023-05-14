import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  
},{ timestamps: true });


var autopopulate = function (this: any,  next : any) {
    this.populate("user");
    next();
  };
  ProductSchema
    .pre("findOne", autopopulate)
    .pre("find", autopopulate)
    .pre("findOneAndUpdate", autopopulate);

export const ProductModel = mongoose.model("Product", ProductSchema);



// Product Actions
export const getProducts = () => ProductModel.find();
export const getProductsByCategory = (category: string) =>
  ProductModel.find({ category: category });
export const searchProductsByName = (name: string) =>
  ProductModel.find({ name: { $regex: name, $options: "i" } });
export const getProductById = (id: string) => ProductModel.findById(id);
export const deleteProductById = (id: string) =>
  ProductModel.findByIdAndDelete(id);
