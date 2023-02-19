import React, { useState } from "react";

//reactforms
import { useForm } from "react-hook-form";

//uuid for unique id
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";

//create new product
import { addAsyncThunk } from "../features/products/productSlice";

//react router dom
import { useNavigate } from "react-router-dom";

//toastify
import { toast, ToastContainer } from "react-toastify";

import FarmersNav from "./FarmersNav";

//import styles from "../styles/Create.module.css";

//to reset to default value and show this a  the inital value through react forms
const defaultValues = {
  description: "",
  veg: "",
  name: "",
  price: "",
  twokg: "",
  fivekg: "",
  tenkg: "true",
  url: "",
  quantity: 1,
  farmer_id: sessionStorage.getItem("_id"),
};

function Create() {
  const dispatch = useDispatch();

  //destructruing objects from useForms

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  //function to disptch async action and rest the data of form and navigate to home page
  const createAproduct = async (data) => {
    const uniqueid = uuidv4;

    const newProeuct = {
      id: uniqueid,
      ...data,
      image: data.url,
    };

    const response = await dispatch(addAsyncThunk(newProeuct));

    reset({
      description: "",
      veg: "",
      name: "",
      price: "",
      twokg: "",
      fivekg: "",
      tenkg: "true",
      url: "",
      farmer_id: sessionStorage.getItem("userid"),
    });

    console.log(response);
    if (response.payload.status !== 200) {
      const error_message = response.payload.message;
      console.error(error_message);
    }

    console.log();
    //if fulfilled navigat to home
    if (response.type === "products/addAsyncThunk/fulfilled") {
      //navigate("/");
      console.log("yeah");
    }
  };
  return (
    <>
      <FarmersNav />
      <main className="main">
        <div className="create__product--container">
          <h1>Create product</h1>
          <form
            onSubmit={handleSubmit((product) => {
              //create a new product in db after vallidation

              createAproduct(product);
            })}
          >
            <fieldset>
              {/* name */}
              <div>
                <label htmlFor="pname">Product name:</label>
                <input
                  id="pname"
                  placeholder="Product Name"
                  name="name"
                  type="text"
                  {...register("name", { required: true, maxLength: 200 })}
                  required
                />
              </div>
              {/* price */}
              <div>
                <label htmlFor="pprice">Product Price:</label>
                <input
                  id="pprice"
                  placeholder="Product Price"
                  type="number"
                  name="price"
                  {...register("price", { required: true, maxLength: 10000 })}
                  required
                />
              </div>

              <div>
                <label htmlFor="pprice">Product quantity(kg):</label>
                <input
                  id="quantity"
                  placeholder="quantity"
                  type="number"
                  name="quantity"
                  {...register("quantity", {
                    required: true,
                  })}
                  required
                />
              </div>
              {/* size */}

              <div>
                <label htmlFor="s">Product quantity:</label>

                <input
                  type="checkbox"
                  id="s"
                  name="tenkg"
                  value={true}
                  {...register("tenkg")}
                />
                <label htmlFor="s">S</label>
                <input
                  type="checkbox"
                  id="m"
                  name="fivekg"
                  value={true}
                  {...register("fivekg")}
                />
                <label htmlFor="m">M</label>
                <input
                  type="checkbox"
                  id="l"
                  name="twokg"
                  value={true}
                  {...register("twokg")}
                />
                <label htmlFor="l">L</label>
              </div>
              {/* Description */}
              <div>
                <label htmlFor="pcolor">Product Description:</label>
                <input
                  id="pcolor"
                  name="description"
                  placeholder="Product Description"
                  {...register("description", { required: true })}
                />
              </div>
              {/* product */}
              <div>
                <label htmlFor="veg">Type:</label>
                <input
                  id="veg"
                  type="radio"
                  name="vegOrFruit"
                  value="true"
                  {...register("veg", { required: true })}
                />
                <label htmlFor="veg">VEGETABLES</label>
                <input
                  id="fruit"
                  type="radio"
                  name="vegOrFruit"
                  value="false"
                  {...register("veg", { required: true })}
                />
                <label htmlFor="fruit">FRUITS</label>
              </div>
              {/* image */}
              <div>
                <label htmlFor="pUrl">Product image url:</label>
                <input
                  id="pUrl"
                  placeholder="Product image url"
                  name="url"
                  {...register("url", { required: true })}
                />
              </div>

              <br />

              <button
                type="submit"
                // handles submit aciton

                onClick={(e) => {
                  //form validation

                  if (
                    errors.url ||
                    errors.description ||
                    errors.name ||
                    errors.veg ||
                    errors.price
                  ) {
                    //if not filled
                    toast.warn("fill all feald", {
                      autoClose: 600,
                      theme: "colored",
                    });
                  }
                }}
              >
                Upload +
              </button>
            </fieldset>
          </form>

          {/* to send notification */}
          <ToastContainer />
        </div>
      </main>
    </>
  );
}

export default Create;
