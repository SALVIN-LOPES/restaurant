import React from "react";
import "./subCategory.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
{
  /* <script src="https://kit.fontawesome.com/d69b7305e6.js" crossorigin="anonymous"></script> */
}
const SubCategory = () =>{

  return (

    <>
      <div className="dish-container">
        <div className="container">
          <div class="title">Sub Category Dish Form</div>
          <div className="form-wrapper">
            <form action="#">
              <div className="form-details">
                <div className="dish-name col input-box">
                  <span className="details">Category</span>
                  <input
                    type="text"
                    placeholder="Enter the category"
                    required
                  />
                </div>

                <div className="dish-image col input-box">
                  <span className="details">Sub Category Name</span>
                  <input
                    type="text"
                    placeholder="Enter the Sub Category Name"
                    required
                    
                  />
                  
                </div>

                <div className="dish-price col input-box">
                  <span className="details">Image</span>
                  <input
                    type="file"
                    placeholder="Enter the sub category image"
                    required
                  />
                </div>
                
                <div className="dish-desc col input-box">
                  <span className="details">Description</span>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Enter the sub category description"></textarea>
                </div>

                <div class="button">
                    <input type="submit" value="Submit"/>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCategory;
