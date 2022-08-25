// import React, {useState} from 'react'
// import '../CSS/Slider.css'
// import BtnSlider from '../components/BtnSlider.js'
// import ZaraMan from "../media/ZaraMan.mp4"
// import zaraWoman from "../media/zaraWoman.mp4"
// export default function Slider() {
//    const dataSlider = [
//     {
//       id: 1,
//       title: ZaraMan,
//       subTitle: "Lorem"
//     },
//     {
//       id: 2,
//       title: zaraWoman,
//       subTitle: "Lorem"
//     }]
//     const [slideIndex, setSlideIndex] = useState(1)

//     const nextSlide = () => {
//         if(slideIndex !== dataSlider.length){
//             setSlideIndex(slideIndex + 1)
//         } 
//         else if (slideIndex === dataSlider.length){
//             setSlideIndex(1)
//         }
//     }

//     const prevSlide = () => {
//         if(slideIndex !== 1){
//             setSlideIndex(slideIndex - 1)
//         }
//         else if (slideIndex === 1){
//             setSlideIndex(dataSlider.length)
//         }
//     }

//     const moveDot = index => {
//         setSlideIndex(index)
//     }

//     return (
//         <>
//         <div className="container-slider">
//             {dataSlider.map((obj, index) => {
//                 return (
//                     <div
//                     key={obj.id}
//                     className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//                     >
//                         <video className='vedio' autoPlay loop muted>
//                            <source src={process.env.PUBLIC_URL +obj.title} type='video/mp4' />
//                          </video>
//                     </div>
//                 )
//             })}
//             <BtnSlider moveSlide={nextSlide} direction={"next"} />
//             <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

//             <div className="container-dots">
//                 {Array.from({length: 2}).map((item, index) => (
//                     <div 
//                     onClick={() => moveDot(index + 1)}
//                     className={slideIndex === index + 1 ? "dot active" : "dot"}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//         <div className="container-slider">
//             {dataSlider.map((obj, index) => {
//                 return (
//                     <div
//                     key={obj.id}
//                     className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//                     >
//                         <video className='vedio' autoPlay loop muted>
//                            <source src={process.env.PUBLIC_URL +obj.title} type='video/mp4' />
//                          </video>
//                     </div>
//                 )
//             })}
//             <BtnSlider moveSlide={nextSlide} direction={"next"} />
//             <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

//             <div className="container-dots">
//                 {Array.from({length: 2}).map((item, index) => (
//                     <div 
//                     onClick={() => moveDot(index + 1)}
//                     className={slideIndex === index + 1 ? "dot active" : "dot"}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//         </>
//     )
// }
