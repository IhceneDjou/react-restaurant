import React, { Fragment } from "react";
import Header from "./Header";
import './Home.css';
import pride from './../../assets/1.png';
import made from './../../assets/2.png';
import shop1 from './../../assets/01.jpg';
import shop2  from './../../assets/02.jpg';
import shop3  from './../../assets/03.jpg';
import ControlledCarousel from "./Carousel";
import Footer from "./Footer";

const Home=()=>{
    return(
        <Fragment>
        <Header/>
        <section className="numbers">
            <div className="container">
            <div className="row">
              <div className="col-md-3">
              <h2>+1245</h2>
              <h6>SAVINGS</h6>
              </div>
              <div className="col-md-3">
              <h2>+965</h2>
              <h6>PHOTOS</h6>
              </div>
              <div className="col-md-3">
              <h2>+7245</h2>
              <h6>ROCKETS</h6>
              </div>   
              <div className="col-md-3">
              <h2>+1545</h2>
              <h6>GLOBES</h6>
              </div>
            </div>
            </div>
        </section>
        <section className="pride">
  <div className="container">
    <div className="row ">
     <div className="col-md-1"></div>
      <div className="col-md-6"> 
        <img src={pride} title="img" alt="pride"/>
      </div>
      <div className="col-md-4"> 
        <h2>We pride ourselves on making real food from the best ingredients.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus
          bibendum in sit amet leo. Mauris feugiat erat tellus.
        </p>
        <button>
          <a href="#">Learn more</a>
        </button>
      </div>
      <div className="col-md-1"></div> 
    </div>
  </div>
</section>

       <section className="made">
         <div className="container">
             <div className="row">
             <div className="col-md-1"></div>
             <div className="col-md-4">
               <h2>
               We make everything by hand with the best possible ingredients.
               </h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
               <ul className="checklist">
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
               </ul>
               <button><a href="#">Learn more</a></button>
             </div>
             <div className="col-md-6">
                <img src={made} title="img" alt="made"/>
                </div> 
             </div>
            <div className="col-md-1"></div>
         </div>
       </section>
       <section className="barre">
        <div className="container">
            <div className="row">
            <div className="col-md-2"></div>
        <div className="col-md-8">
          <h1>When a man's stomach is full it makes no
difference whether he is rich or poor.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>
finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
          <a href="#"><i className='bx bx-play'></i> Watch Our Story</a></div>
          <div className="col-md-2"></div>
          </div>
          </div>
       </section>

       <div className="text">
        <div className="row">
       <div className="col-md-2"></div>
        <div className="col-md-8">
          <h1>Explore Our Foods</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
        
          </p></div>
          <div className="col-md-1"></div>
        </div>
        </div>
        <section className="food"> 
          <div className="container">
          <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
           <div className="row">
        
           <div className="col-md-4">
           <div className="card">
             <img src={shop1} className="card-img-top" alt="Product" />
             <div className="card-body">
               <h5 className="card-title">Rainbow Vegetable Sandwich</h5>
               <p className="card-text">Time: 15 - 20 Minutes | Serves: 1e</p>
               <h4 className="card-subtitle mb-2 text-muted">$99.99 <span>150.00</span> </h4>
               <button className="btn btn-primary btn-block">Order Now</button>
             </div>
           </div>
           </div>

           <div className="col-md-4">
           <div className="card">
             <img src={shop2} className="card-img-top" alt="Product" />
             <div className="card-body">
               <h5 className="card-title">Rainbow Vegetable Sandwich</h5>
               <p className="card-text">Time: 30 - 45 Minutes | Serves: 1e</p>
               <h4 className="card-subtitle mb-2 text-muted">$99.99 <span>150.00</span> </h4>
               <button className="btn btn-primary btn-block">Order Now</button>
             </div>
           </div>
           </div>
           
            
           <div className="col-md-4">
           <div className="card">
             <img src={shop3} className="card-img-top" alt="Product" />
             <div className="card-body">
               <h5 className="card-title">Rainbow Vegetable Sandwich</h5>
               <p className="card-text">Time: 10 - 15 Minutes | Serves: 1e</p>
               <h4 className="card-subtitle mb-2 text-muted">$99.99 <span>150.00</span></h4>
               <button className="btn btn-primary btn-block">Order Now</button>
             </div>
           </div>
           </div> 
           </div>
           </div>
           <div className="col-md-1" ></div>
          </div>
          </div>
       </section>

       <section className="tester">
          <div className="container">
            <h1>Testimonials</h1>

            <ControlledCarousel/>
          </div>
          </section>
          <section className="email">
        <div className="row">
       <div className="col-md-3"></div>
        <div className="col-md-6">
          <h1>Hurry up! Subscribe our newsletter and get 25% Off</h1>
          <p>Limited time offer for this month. No credit card required.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
          <input id="newsletter" type="email" className="form-control h-100" placeholder="Enter your email" autoComplete="on"/>
          <button className="btn btn-primary" type="button" id="subscribeButton">Subscribe</button>
        </div>
        
          </div>
          <div className="col-md-3"></div>
        </div>
        </section>

       <Footer></Footer>
        </Fragment>
    )
}

export default Home;