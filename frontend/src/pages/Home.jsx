import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VericalCardProduct from '../components/VerticalCardProduct'


const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>


      <HorizontalCardProduct category={"airpodes"} heading={"Top Airpodes"}/>

      <HorizontalCardProduct category={"earphones"} heading={"Popular Earphones"}/>
      <VericalCardProduct category={"Perfume"} heading={"Perfume"}/>

     <VericalCardProduct category={"mobiles"} heading={"Popular Mobiles"}/>

     
     <VericalCardProduct category={"Mouse"} heading={"mouse"}/>

     <VericalCardProduct category={"televisions"} heading={"Television"}/>
     <VericalCardProduct category={"camera"} heading={"Camera & Photography"}/>
     <VericalCardProduct category={"printers"} heading={"printers"}/>
     <VericalCardProduct category={"speakers"} heading={"Speakers"}/>

     <VericalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>

     <VericalCardProduct category={"trimmers"} heading={"trimers"}/>
     
     <VericalCardProduct category={"watches"} heading={"watches"}/>
    
     <VericalCardProduct category={"Sneakers"} heading={"Sneakers & Shoes"}/>


      
    </div>
  )
}

export default Home