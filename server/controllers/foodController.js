import FoodModel from "../models/foodModel.js";

export const addFood = async (req , res)=>{
    const {foodName,price,category,subCategory,slug} = req.body;
    try{
        const result = await FoodModel.create({foodName:foodName,price:price,category:category,subCategory:subCategory,slug:slug});
        res.status(200).json({result:result})
    }catch(error){
        res.status(500).json({message: "Something went wrong...!"});
        console.log("Server adding food error: "+error);
    }
}

export const getCategoryFood = async (req ,res)=>{
    const {category} = req.params;
    try{
        const result = await FoodModel.find({category: category});
        if(!result) res.status(500).json({message: 'No Category of this name '+category+' found...!'});
        res.status(200).json({result: result});
    }catch(error){
        res.status(500).json({message: "Something went wrong...!"});
        console.log("Server fetching category food error: "+error);
    }

}

export const getSubCategoryFood = async (req ,res)=>{
    const {category,subCategory} = req.params;
    try{
        const result = await FoodModel.find({category: category,subCategory:subCategory});
        if(!food) res.status(500).json({message: 'No SubCategory of this name '+subCategory+' under Category '+ category+' found...!'});
        res.status(200).json({result: result});
    }catch(error){
        res.status(500).json({message: "Something went wrong...!"});
        console.log("Server fetching subCategory food error: "+error);
    }

}

export const getSpecificFood = async (req ,res)=>{
    const {id} = req.params;
    try{
        const food = await FoodModel.findById(id);
        if(!food) res.status(500).json({message: 'Specific food not found...!'});
        res.status(200).json({result: result});
    }catch(error){
        res.status(500).json({message: "Something went wrong...!"});
        console.log("Server fetching Specific food error: "+error);
    }
}

export const likeFood = async (req ,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message: "Something went wrong...!"});
        console.log("Server like food error: "+error);
   }
}

export const commentFood = async (req ,res)=>{
    const {id} = req.params;
    const {com} = req.body;
    try {
        const food = await FoodModel.findById(id);
        if(!food) res.status(500).json({message: 'food not found...!'});
        food.comments.push(val);
        const updatePost = FoodModel.findByIdAndUpdate(id,food,{new:true});
        res.status(200).json({result: updatePost});
    } catch (error) {
        res.status(500).json({message: "Something went wrong...!"});
        console.log("Server comment food error: "+error);
    }
}