import { Box, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from "react"

import  "../CSS/Home.css"
import { Link } from "react-scroll";
import BtnSlider from '../components/BtnSlider'
import { dataSlider, dataSliderFooter, imageSlider } from '../Data/data'



export const Home=()=>{

    const [slideIndex, setSlideIndex] = useState(1)
    const [active, setactive] = useState("new")
    useEffect(() => {
      document.addEventListener("scroll", () => {
        const scrollCheck = window.scrollY
        console.log(scrollCheck)
        if(scrollCheck<300){
          setactive("New")
        }if(scrollCheck>300){
          setactive("Basics")
        }if(scrollCheck>1200){
          setactive("Jeans")
        }if(scrollCheck>1700){
          setactive("Shoes")
        }
      })
    },[])
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

return <div className='homeMain'>
    <div className="container-dots">
            {dataSliderFooter.map((item, index) => (
                    <Link activeClass="active"
                    to={item.subTitle}
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={1000}
              >
                    <div id="dots" 
                    onClick={()=>setactive(item.title)}
                    className={active==item.title?"dot active":"dot"}
                    ></div>
                    </Link>
                ))}
            </div>
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
   <Box as='section' id='box1'  className='section ' bg='brand.900' color='white'>
   <div className="container"  >
    {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <Link to="/login">
                        <video className='vedio' autoPlay loop muted>
                           <source src={process.env.PUBLIC_URL +obj.title} type='video/mp4' />
                         </video>
                        </Link>
                    </div>
                )
            })}
            
          
            
            <div className="container-sliderFooter">
                {dataSliderFooter.map((item, index) => (
                    <Link activeClass="active"
                    to={item.subTitle}
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={1000}
              >
                    <div 
                     onClick={()=>setactive(item.title)}
                     className={active==item.title?"sliderFooter active":"sliderFooter"}
                    >{item.title}</div>
                    </Link>
                ))}
            </div>
            {/*  */}
          
                   
</div>
   </Box>






<Box as='section' id='box2' className='section ' bg='brand.900' color='white'>
<div className="container"  >
    {imageSlider[0].map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <Link to="/login">
                        <Image w='100vw' h="100vh" src={obj.title}/>
                        </Link>
                    </div>
                )
            })}
</div>

</Box>
<Box  as='section' id='box3' className='section ' bg='green'  color='white'>
<div className="container"  >
    {imageSlider[1].map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <Link to="/login">
                        <Image w='100vw' h="100vh" src={obj.title}/>
                        </Link>
                    </div>
                )
            })}
</div>
</Box>
<Box as='section' id='box4' className='section ' bg='grey'  color='white'>
<div className="container"  >
    {imageSlider[2].map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <Link to="/login">
                        <Image w='100vw' h="100vh" src={obj.title}/>
                        </Link>
                    </div>
                )
            })}
           
</div>
</Box>
</div>

}