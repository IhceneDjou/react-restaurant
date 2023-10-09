import React from "react";
import './Footer.css';



const Header =() =>{

    return(
        <footer className="text-center text-white" >
       
        <div className="container pt-4">
         
          <section className="mb-4">
            
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className='bx bxl-facebook'  ></i></a>
      
           
      
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className='bx bxl-instagram'  ></i></a>
             <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className='bx bxl-youtube'  ></i></a>
              
              <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i className='bx bxl-tiktok' ></i></a>
          </section>
          
        </div>
       
        <div className="text-center  p-3" >
          © 2023 Copyright:
          <a className="text-light" href="https://ihcenedjou.github.io/portfolio/"> DEVRANO</a>
        </div>
       
      </footer>
    )
}

export default Header;