import React from "react";
import "./dishForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
{
  /* <script src="https://kit.fontawesome.com/d69b7305e6.js" crossorigin="anonymous"></script> */
}
const DishForm = () => {

    const [BaseImage,setBaseImage] = useState("")


    const uploadImage = async (e) =>{
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64)
        console.log("BASE64 FILE = ",base64);

    };

    const convertBase64 = (file) =>{
        return new Promise((resolve,reject) =>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = (() =>{
                resolve(fileReader.result);
            })

            fileReader.onerror = ((error) =>{
                reject(error);
            })
        })
    }

  return (

    <>
      <div className="dish-container">
        <div className="container">
          <div class="title">Dish Form</div>
          <div className="form-wrapper">
            <form action="#">
              <div className="form-details">
                <div className="dish-name col input-box">
                  <span className="details">Name</span>
                  <input
                    type="text"
                    placeholder="Enter the dish name"
                    required
                  />
                </div>

                <div className="dish-image col input-box">
                  <span className="details">Image</span>
                  <input
                    type="file"
                    placeholder="Enter the dish image"
                    required
                    onChange ={ (e) =>{
                        uploadImage(e);
                    }}
                  />
                  {/* use this to get uploaded image 👇 */}
                  {/* <img src={BaseImage} alt="image not loaded" /> */}
                </div>

                <div className="dish-price col input-box">
                  <span className="details">Price</span>
                  <input
                    type="text"
                    placeholder="Enter the dish price"
                    required
                  />
                </div>
                
                <div className="dish-desc col input-box">
                  <span className="details">Description</span>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div className="dish-category details">Category
                <select name="category" id="category">
                    <option value="Indian">Indian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Japnese">Japnese</option>
                    <option value="Mexican">Mexican</option>
                </select>
                </div>
                

                <div className="dish-price col input-box">
                  <span className="details">Sub Category</span>
                  <input
                    type="text"
                    placeholder="Enter the sub category"
                    required
                  />
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

export default DishForm;
