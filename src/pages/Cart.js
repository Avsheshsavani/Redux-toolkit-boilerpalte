import React from "react";
import { useSelector ,useDispatch} from "react-redux/es/exports";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch=useDispatch()
  const produts = useSelector((state) => state.cart);
  const handleRemove=(id)=>{
dispatch(remove(id))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {produts.map((product) => (
          <div className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={()=>handleRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
