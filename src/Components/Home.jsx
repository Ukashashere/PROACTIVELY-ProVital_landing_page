/* hit ctrl+K then M, then type react, it enables react intillicence*/    /* OR we could've renamed the file to .jsx*/
/* rafce */ 

import React from 'react';

import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return(                                 /*This thing is the HTML part*/
      <div className="home-container">
          <div className="">         {/*typo was there*/}
            <div className="">   {/*typo was here too*/}
                       {/*Now the Home Error got fixed*/}
            </div>
            <div className='home-text-section'>
              <h1 className='primary-heading'>
                Book an appointment with
                lifestyle medicine experts
              </h1>
              <p className='primary-text'>
                Healthy switchefr chefs do all the prep work, like peeding,
                chopping
                & marianting, so you can cook a fresh food.
              </p>
              <button className='secondary-button'>
                Order Now<FiArrowRight />
              </button>
            </div>
            <div className="home-image-section">    {/*this was not present*/}

            </div>
          </div>
      </div>
  );  
};

export default Home;