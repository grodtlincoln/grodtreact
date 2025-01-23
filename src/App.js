import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const App = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
    setIsVisible(true);
   }, []);

const handleFormSubmit = (e) => {
  e.preventDefault();
  alert ("Your Message Has Been Sent Successfully")
}

   return (
    <div className='container-fluid p-0'>
      {/* navigation Bar */}
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
        <div className='container'>
          <a className='navbar-brand' href='#home'> Grodt Enterprices </a>
          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle= "collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded= "false"
          aria-level="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#home'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#skills'>Skills</a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#contact'>Contact</a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* landing section */}

<div id='home'className='hero-section d-flex flex-column flex-lg-row 
align-items-center justify-content-center text-center text-lg-start'>

<div className={`text-content me-lg-4 mb-4 mb-lg-0 ${isVisible ? 'animate-text' : ''}`}>
 <h1 className='display-4 text-white fw-bold'> Hello, <br></br>I'm Grodt </h1>
 <p className='lead text-white mb-4 fs-4'>
i'm a passionate Front-End Developer creating interactive and visually stunning websites.
 </p>
 <a href="#skills" className="btn btn-light btn-lg scroll-btn fw-bold fst-italic">Check My Skills</a>
</div>

<div className={`image-container ${isVisible ? 'animate-image' : ''}`}>
  <img src="/images/jp.png" alt='Developer' className="large-square-image img-fluid"></img>
</div>

</div>

{/* skill section */}
<section id='skills' className='pt-5'>
   <div className='container text-center'>
     <h2 className='pb-4 fw-bold'>
       My Skills
     </h2>

   <div className='row'>
     {/* skills 1 */}
   <div className='col-md-4'>
     <div className='skill-card p-4 m-2 bg-white shadow'>
       <h4>
         HTMLS
       </h4>
       <p className='fw-bold'>
         Expert In Building Semantic, Accessible And Seo-Friendly HTML Structure.
       </p>
     </div>
   </div>
   {/* skills 2 */}
   <div className='col-md-4'>
     <div className='skill-card p-4 m-2 bg-white shadow'>
       <h4>
         CSS
       </h4>
       <p className='fw-bold'>
         Experienced In Crafting Responsive, Pixel-Perfect Designs With
         Modern CSS Techniques.
       </p>
     </div>
   </div>
   {/* skills 3 */}
   <div className='col-md-4'>
     <div className='skill-card p-4 m-2 bg-white shadow'>
       <h4>
         JAVASCRIPT
       </h4>
       <p className='fw-bold'>
         Proficient In React JAVASCRIPT And Moderns ES6+
         Features To Create Dynamic Web Apps
       </p>
     </div>
   </div>
 
   </div>

   </div>
</section>

<div className='container-fluid liner'>
   <img src="/images/line.png"/>
</div>

{/* contact section */}
<section id='contact' className='pb-4 contact-section'>
    <div>
      <div className='container text-center'>
        <h2 className='mb-5 text-white fw-bold'>
          Get In Touch
        </h2>

    <div className='contact-form-container mx-auto p-4'>
       <form onSubmit={handleFormSubmit}>
         <div className='mb-3'>
           <input type='text' className='form-control' placeholder='Your Name' required />
         </div>
         <div className='mb-3'>
           <input type='email' className='form-control' placeholder='Your Email' required />
         </div>
         <div className='mb-3'>
           <textarea className='form-control' rows="4" placeholder='Your Message' required>

           </textarea>
         </div>
          <button type='submit' className='btn btn-dark btn-lg'>Send Message</button>
       </form>
    </div>

      </div>
    </div>

   </section>

    {/* footer */}
    <footer className='text-center py-3 bg-dark text-white fw-bold'>
      <p>
         &copy; 2025 Grodt Portfolio | Designed by Grodt
      </p>
    </footer>
</div>
   );
};

export default App;
