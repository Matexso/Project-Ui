import React from 'react'

function Portfolio() {
  return (
<>

      <section class="w-100 float-left portfolio-con padding-top" id="Portfolio">
         <div class="container">
            <div class="generic-title text-center">
               <h6 class="text-white">Creative Works</h6>
               <h2 class="mb-0 text-white">Check My Portfolio</h2>
            </div>
            <div id="myBtnContainer" class="text-center">
               <button class=" active active_button" onclick="filterSelection('all')"> All </button>
               <button class="" onclick="filterSelection('cars')">Products </button>
               <button class="" onclick="filterSelection('animals')">Web App</button>
               <button class="" onclick="filterSelection('fruits')"> Inetraction </button>
               <button class="" onclick="filterSelection('colors')">Brand Identity</button>
            </div>
         </div>
      </section>
    









</>  )
}

export default Portfolio