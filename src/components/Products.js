import React, { useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { productListApi } from "../store/ApiAction/ApiAction";

const Products = () => {
  const dispatch=useDispatch();
  const {data:products,status}=useSelector((state)=>state.product)

  useEffect(() => {
        dispatch(productListApi())
  }, []);

  const handleAdd=(products)=>{
      dispatch(add(products))
  }
  if(status=='loading'){
    return <h1>Loading...</h1>
  }

  if(status=="error"){
    return <h1>Error</h1>
  }
  return <div className="productsWrapper">
    {status=='success' &&
        products.map(products=>(
            <div className="card" key={products.id}>
                <img src={products.image} alt="" />
                <h4>{products.title}</h4>
                <h5>{products.price}</h5>
                <button onClick={()=>handleAdd(products)} className="btn">Add to cart</button>
            </div>
        ))
    }

  </div>;
};

export default Products;
