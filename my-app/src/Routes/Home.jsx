import { Box } from '@chakra-ui/react'
import React from "react"
import  "../CSS/Home.css"

export const Home=()=>{
return <div>
    <div className="container"  >
    <Box as='section'  className='section xoverflow' bg='brand.100' color='white'>
  This is the Box 1
</Box>
<Box  as='section' className='section' bg='green'  color='white'>
  This is the Box 2
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