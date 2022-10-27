import mongoose from 'mongoose';

const foodSchema = mongoose.Schema({
    foodName:{ type: String, required: true},
    image:{ type: String,default:""},
    price: { type: Number, required: true},
    category: { type: String, required: true}, // main-course/juice/startes/desert etc
    subCategory : { type: String, required: true}, // italian/chineese/spain etc
    comments: [{ type:mongoose.Schema.Types.ObjectId,ref:"Review",default:[] }],
    like:{type:Array,default:[]},
    slug: { type:String, required: true},
})

var FoodModel = mongoose.model("Food",foodSchema);

export default FoodModel;