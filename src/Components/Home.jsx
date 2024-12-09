/* hit ctrl+K then M, then type react, it enables react intillicence*/    /* OR we could've renamed the file to .jsx*/
/* rafce */ 

import React from 'react';
import Navbar from './Navbar';
import About from './About.jsx';

import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return(                                 /*This thing is the HTML part*/
      <div className="home-container">
          <Navbar />
          <div className="">         {/*typo was there*/}
            <div className="">   {/*typo was here too*/}
                       {/*Now the Home Error got fixed*/}
            </div>
            <div className='home-text-section'>
              <h1 className='primary-heading'>
                Your Favourite Food Delivered Hot & Fresh
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