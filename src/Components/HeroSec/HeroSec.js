import React from "react";
import "./HeroSec.css";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const HeroSec = () => {
  return (
    // <div className="herosec mt-5">
    //   <div className="contentbox">
    //     <h1>QUALITY SHOES YO</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet
    //       cumque ratione et quia tenetur, eaque facere nisi necessitatibus
    //       exercitationem enim distinctio temporibus quidem assumenda sapiente!
    //       Recusandae nobis quae quod.
    //     </p>

    //     <div className="btn-container">
    //       <Link to={"/product"}>
    //         {" "}
    //         <button className="btn btn-primary">Buy Now</button>
    //       </Link>
    //       <button className="btn btn-secondary">Category</button>
    //     </div>

    //     <div className="brandimage">
    //       <p>Available on:</p>

    //       <div className="imgContainer">
    //         <img
    //           src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png"
    //           alt=""
    //           height={48}
    //         />
    //         <img
    //           src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
    //           alt=""
    //           height={30}
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="imagebox">
    //     <img
    //       className="image"
    //       src="https://www.vectorkhazana.com/assets/images/products/Nike_Shoes_fade.png"
    //       alt=""
    //     />
    //   </div>
    // </div>

    // <div class="container-fluid px-4 py-5 my-5 text-center">
    //   <div class="lc-block mb-4">
    //     <div editable="rich">
    //       <h2 class="display-2 fw-bold">
    //         Level up your <span class="text-primary">WordPress page!</span>
    //       </h2>
    //     </div>
    //   </div>
    //   <div class="lc-block col-lg-6 mx-auto mb-5">
    //     <div editable="rich">
    //       <p class="lead">
    //         Quickly design and customize responsive mobile-first sites with
    //         Bootstrap
    //       </p>
    //     </div>
    //   </div>

    //   <div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
    //     {" "}
    //     <a class="btn btn-primary btn-lg px-4 gap-3" href="#" role="button">
    //       Try it free
    //     </a>
    //     <a class="btn btn-outline-secondary btn-lg px-4" href="#" role="button">
    //       Learn more
    //     </a>
    //   </div>
    //   <div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
    //     <img
    //       class="img-fluid"
    //       src="https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/10/undraw_going_up_ttm5.svg"
    //       width=""
    //       height="783"
    //       srcset=""
    //       sizes=""
    //       alt=""
    //     />
    //   </div>
    // </div>

     
  
    
<div class="container p-5 mt-5 bg-dark text-white" style={{borderRadius:"16px"}}>
	<div class="row flex-lg-row-reverse align-items-center g-5">
		<div class="col-10 mx-auto col-sm-8 col-lg-6">
			<img src="https://img.freepik.com/free-photo/nighttime-cityscape-with-illuminated-cars-vibrant-futuristic-architecture-generated-by-artificial-intelligence_24877-80923.jpg?t=st=1708453315~exp=1708456915~hmac=42a69e116fdf6ebafe79e258f3f35af32df655471726d2e1e443cfbd7697787c&w=1380" class="d-block mx-lg-auto img-fluid" alt="" loading="lazy"/>
		</div>
		<div class="col-lg-6">
			<div class="lc-block mb-3">
				<div editable="rich">
					<h2 class="fw-bold display-5">Responsive left-aligned hero with image</h2>
				</div>
			</div>

			<div class="lc-block mb-3">
				<div editable="rich">
					<p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
					</p>
				</div>
			</div>

			<div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start"><a class="btn btn-primary px-4 me-md-2" href="#" role="button">Click me, I'm a button</a>
				<a class="btn btn-outline-secondary px-4" href="#" role="button">Click me, I'm a button</a>
			</div>

		</div>
	</div>
</div>
 
 
  
  );
};

export default HeroSec;
