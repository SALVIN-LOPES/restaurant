import mongoose from "mongoose";

const review = mongoose.Schema({
    user:{ type:mongoose.Schema.Types.ObjectId,ref:"User",default:[] },
    foodName:{ type: String, default:"" },
    rating:{type: Number,required: true},
    comment:{type: String, required: true},
},
{
    timestamps: true
}
)

var ReviewModel = mongoose.model("Review",review);
export default ReviewModel;