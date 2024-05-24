import { useContext } from "react";
import { BasketContext } from '../../context/BasketContext.jsx';
import './Card.scss'
import { WishlistContext } from "../../context/WishListConText.jsx";
const Card = ({image,title,text,product}) => {
const{AddBasket}=useContext(BasketContext)
const{addWish}=useContext(WishlistContext)
	return (
		<>
			<div className="Card">
				<div className="CardImage">
					<img src={image} alt="" />
				</div>
				<div className="CardTitle">
					<span>{title}</span>
				</div>
				<div className="CardText">
					<span>{text}</span>
				</div>
				<div className="CardBtn">
					<button onClick={()=> AddBasket(product)} >CART</button>
					
					<button onClick={()=>addWish(product)}>WishList</button>
				</div>
			</div>
		</>
	);
};

export default Card;