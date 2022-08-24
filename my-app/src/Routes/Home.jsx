import { Box } from '@chakra-ui/react'
import React from "react"
import ZaraMan from "../media/ZaraMan.mp4"
import zaraWoman from "../media/zaraWoman.mp4"
import  "../CSS/Home.css"
import { Link } from 'react-router-dom'

export const Home=()=>{
return <div>
    <div className="container"  >
    <Box as='section'  className='section xoverflow' bg='brand.100' color='white'>
   
    <Link to="/login"> <video className='videoTag' autoPlay loop  muted={true}>
    <source src={ZaraMan} type='video/mp4' />
</video></Link>
</Box>
<Box  as='section' className='section' bg='green'  color='white'>
<Link to="/login"> <video className='videoTag' autoPlay loop  muted={true}>
    <source src={zaraWoman} type='video/mp4' />
</video></Link>
</Box>
<Box as='section' className='section xoverflow' bg='grey'  color='white'>
  This is the Box 3
</Box>
</div>
<Box as='section'  className='section xoverflow' bg='brand.900' color='white'>
  This is the Box 4
</Box>
<Box  as='section' className='section xoverflow' bg='green'  color='white'>
  This is the Box 5
</Box>
<Box as='section' className='section xoverflow' bg='grey'  color='white'>
  This is the Box 6
</Box>
</div>

}