import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/cartSlice";
import Star from "../../Components/Star/Star";


import "./NextPageStyles.css";

const NextPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = location.state;
  console.log("data", data);


  const handleAddToCartClick = (e, data) => {
    dispatch(addToCart(data));
  };


  return (

    <>

<div className="container">
		<div className="prodcard">
			<div className="container-fliud">
				<div className="wrapper row ">
					<div className="preview col-md-6 ">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={data.img}/></div>
						  <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
						</div>
						<ul className="preview-thumbnail nav nav-tabs">
						  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						</ul>
						
					</div>
					<div className="details col-md-6" >
						<h3 className="productTitle">{data.title}</h3>
						<div className="rating">
							<div className="stars">
							<Star stars={data.rating}></Star>

							</div>
							<span className="review-no" style={{marginTop:"10px"}}>41 reviews</span>
						</div>
						<p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
						<h4 className="price">current price: <span>Rs {data.price}</span></h4>
						<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 className="sizes">Variant:
							{/* <span className="size" data-toggle="tooltip" title="small">8GB/64GB</span>
							<span className="size" data-toggle="tooltip" title="medium">16gb/128gb</span>			 */}
						</h5>
						{/* <h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span className="color green"></span>
							<span className="color blue"></span>
						</h5> */}
						<div className="action d-flex gap-3">
							<button className="add-to-cart btn btn-default" type="button" onClick={(e) => handleAddToCartClick(e, data)}>add to cart</button>
							<button className="like btn btn-default" type="button"><span className="bi bi-heart" style={{color:"red"}}></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</>
  );
};

export default NextPage;
