import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import React from "react"
import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay,Grid,Icon,Image,StackDivider, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import  "../CSS/Navbar.css"
import { Link as RouterLink  } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons';
import { AuthContext } from "../Context/AuthContext"

export const ProductsDetail=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const params=useParams()
    const [pdata,setpdata]=useState([])
    const [mainImg,setMainImg]=useState("")
   const {state,dispatch}=useContext(AuthContext)
    let baseUrl=""
  if(params.id.includes("w")){
   baseUrl="https://zara-backend.onrender.com/Woman/"+params.id
  }else if(params.id.includes("m")){
    baseUrl="https://zara-backend.onrender.com/Men/"+params.id
  }else if(params.id.includes("k")){
    baseUrl="https://zara-backend.onrender.com/Kids/"+params.id
  }
    useEffect(()=>{
        fetch(baseUrl).then((res)=>{
            return res.json()
        }).then((res)=>{
           setpdata(res)
           setMainImg(res.image)
        })
    },[baseUrl])
    const handleImage=(value)=>{
      setMainImg(value)
    }
    const handleCart=()=>{
      let flag=false
      state.cartData.forEach((el)=>{
        if(el.id===pdata.id){
          flag=true;
        }
      })
      if(flag===false){
        let action={
          type:"addCartData",
          payload:{
            data:pdata
          }
        }
       dispatch(action)
        
      }else{
        alert("Item Already Added")
      }
    }
    return <>
     <Flex className='navbarAll' w='100%' pt='10px' gap={[0,2,2]} flexDir={["column","row","row"]}>
    <Flex gap='2'>
    <Box>
    <Button size='lg' ref={btnRef} mr='1.5em' ml='2em' color="black" variant='link' onClick={onOpen}>
        <Icon as={HamburgerIcon}  boxSize='1.5em' mt='0.5em' />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
          <svg viewBox="0 0 132 55"  style={{fill:"black",width:'10em',height:"4em"}}><path fillRule="evenodd" clipRule="evenodd" d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path></svg>
          </DrawerHeader>

          <DrawerBody>
          <VStack
           divider={<StackDivider borderColor='gray.200' />}
           spacing={2}
           align='stretch'
           mt='2em'
            >
           <Box >
            <RouterLink to={state.isAuth?"/account":"/login"}>{state.isAuth?state.user:"Login"}</RouterLink>
            </Box>
            <Box >
            <RouterLink to="/men">Men</RouterLink>
            </Box>
            <Box >
            <RouterLink to="/women">Women</RouterLink>
            </Box>
            <Box >
            <RouterLink to="/kids">Kids</RouterLink>
            </Box>
        </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  <Box p='2'  >
    {/* <Image src={zaraLogo} w='20%'/> */}
    <RouterLink to='/'>
    <svg viewBox="0 0 132 55"  style={{fill:"black",width:'12em',height:"5.2em"}}><path fillRule="evenodd" clipRule="evenodd" d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path></svg>
    </RouterLink>
   </Box>
    </Flex>
  <Spacer />
  <ButtonGroup className='navbtnbox' gap='2' ml={["2em",0,0]} pt='0.7rem' mr={[0,null,'1rem']}>
    <RouterLink to="/search"><Button className='navbarbtn search' fontWeight="500" borderBottom='1px'  borderColor="black" color="black" outline='none' p='0px' justifyContent="flex-start"  variant='ghost'>Search</Button></RouterLink>
    <RouterLink to={state.isAuth?"/account":"/login"}><Button className='navbarbtn loginbtn'  fontWeight="400" color="black" variant='link'>{state.isAuth?state.user:"Login"}</Button></RouterLink>
    <RouterLink to="/help"><Button className='navbarbtn' fontWeight="400" color="black" variant='link'>Help</Button></RouterLink>
   <RouterLink to="/cart">
   <Button className='navbarbtn' position="relative"  color="black" variant='link'><Box as="span"  fontSize="14px" className="cartCounter">{state.cartCount}</Box>
      <svg  style={{fill:"black",width:'2em',height:"2.2em"}}><path fillRule="evenodd" clipRule="evenodd" d="M9 5.001V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.001h5v7h-1v-6H5v13.9h10v1H4V5h5zM10 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.001h-4V4z"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M22.8 23.4v-9h-5.4v9l2.695-2.827L22.8 23.4zm-4.6-1.998l1.894-1.987L22 21.407V15.2h-3.8v6.202z"></path>
      </svg>
    </Button>
   </RouterLink>
  </ButtonGroup>
</Flex>
<Grid p="2em" templateColumns={['100%','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} mt="10vh">
  <Box  mt="15%" p={"0em 13em 0em 2em"} display={["none","none","none","block"]}>
    <Text mb="20px" fontFamily="Times New Roman" fontWeight="500" fontSize='16px' color='#000000'>MATERIALS,CARING</Text>
    <Text mb="20px" fontFamily="Times New Roman" fontWeight="500" fontSize='16px' color='#000000'>JOIN LIFE</Text>
    <Text mb="20px" lineHeight="15px" fontFamily="Times New Roman" fontWeight="300" fontSize='14px' color='#000000'>Care for fiber: at least 35% <br /> recycled polyester.</Text>
    <Text  mb="20px" lineHeight="15px" fontFamily="Times New Roman" fontWeight="300" fontSize='14px' color='#000000'>We use the Join Life label
     on clothing that is produced using
     technology and raw materials that help us to reduce the
      environmental impact of our products. </Text>
  </Box>
  <Box  display={["flex","flex","flex"]} flexDirection={["column","row","row"]} gap='2'>
    <Box w="20em" h={["300px","500px","500px"]} height="100%" mt={["10vh","0px","0px"]}>
      <Image src={mainImg}/>
    </Box>
    <Box gap='1' display={["flex","block","block"]} mt={["10px","0px","0px"]}>
      <Image w="3em" cursor="pointer" mb="1em" mr="1em" src={pdata.image} onClick={()=>handleImage(pdata.image)}/>
      <Image w="3em" cursor="pointer" mb="1em"mr="1em" src={pdata.prodImage1} onClick={()=>handleImage(pdata.prodImage1)}/>
      <Image w="3em" cursor="pointer" mb="1em"mr="1em" src={pdata.prodImage2} onClick={()=>handleImage(pdata.prodImage2)}/>
      <Image w="3em" cursor="pointer" mb="1em"mr="1em" src={pdata.prodImage3} onClick={()=>handleImage(pdata.prodImage3)}/>
    </Box>
  </Box>
  <Box mt="15%" p={"0em 2em 0em 6em"}>
    <Text fontFamily="Times New Roman" fontWeight="500" fontSize='21px' color='#000000'>{pdata.title}</Text>
    <Text fontFamily="Times New Roman" fontWeight="300" fontSize='14px' color='#000000'>{pdata.body}</Text>
    <Text fontFamily="Times New Roman" m="20px 0px" fontWeight="300" fontSize='16px' color='#000000'>{pdata.color}</Text>
    <Text fontFamily="Times New Roman" mb="8px" fontWeight="300" fontSize='16px' color='#000000'>&#8377; {pdata.price}</Text>
    <Text color="#999999"fontFamily="Times New Roman" mb="30px" fontWeight="300" fontSize='12px'>MRP incl. of all taxes</Text>
    <Button size='md' mt="1em"fontFamily="Times New Roman"fontWeight="500" fontSize='16px' width="100%" color='#ffffff' bg='black' borderRadius='none' onClick={handleCart} >ADD TO BAG</Button>
  </Box>
</Grid>
    </>
}