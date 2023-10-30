import {
    
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Text,
   
    
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import axios from "axios"
  import { useToast } from '@chakra-ui/react'
  import { useNavigate } from 'react-router-dom';
  
  
  export default function Login() {
    const toast = useToast()
    const navigate=useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [toggle,settoggle]=useState(true)
    const [signemail,setsignemail]=useState("")
    const [signpass,setsignpass]=useState("")
    const [signconpass,setsignconpass]=useState("")
    const [logemail,setlogemail]=useState("")
    const [logpass,setlogpass]=useState("")
  
  
  function handlesignup(){
    console.log(signemail,signpass,signconpass)
    if(signemail==="" || signpass==="" || signconpass===""){
       
       toast({
        position: 'top-right',
        title:"Need to fill the credentials",
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
    }
    else{
        let obj={
            email:signemail,
            password:signpass,
            confirmPassword:signconpass
        }
        axios.post("https://tiny-blue-angler-kit.cyclic.app/user/signup",obj)
        .then((res)=>{
            if(res.data.err){
                console.log(res.data.err)
                toast({
                    position: 'top-right',
                    title: res.data.err,
                    status: 'warning',
                    duration: 5000,
                    isClosable: true,
                  })
            }
            else{
                toast({
                    position: 'top-right',
                    title: res.data.msg,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                  }) 
                  settoggle(false) 
            }
        })
        .catch((err)=>console.log(err))
    }
  }
  
  function handlelogin(){
    
    if(logpass==="" || logemail===""){
       
       toast({
        position: 'top-right',
        title:"Need to fill the credentials",
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
    }
    else{
        let obj={
            email:logemail,
            password:logpass
        }
        axios.post("https://tiny-blue-angler-kit.cyclic.app/user/login",obj)
        .then((res)=>{
            if(res.data.err){
                console.log(res.data.err)
                toast({
                    position: 'top-right',
                    title: res.data.err,
                    status: 'warning',
                    duration: 9000,
                    isClosable: true,
                  })
            }
            else{
                
                localStorage.setItem("token",res.data.token)
                toast({
                    position: 'top-right',
                    title: res.data.msg,
                    status: 'success',
                    duration: 6000,
                    isClosable: true,
                  }) 
               navigate("/dashboard")   
            }
        })
        .catch((err)=>console.log(err))
    }
  }
  
  
    return (
      
        <Stack spacing={8} m={'50px auto'} width={"50%"}>
          
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            borderRadius={'10px'}
            p={8}>
                <HStack   w={'100%'} justifyContent={'space-between'}>
                <Box  w="50%">
               
                    <Button color={toggle?'black':'white'} backgroundColor={toggle?'':'teal'} _hover={{backgroundColor:'rgb(0,50,120)'}} onClick={()=>settoggle(false)}  w="100%">Login</Button>
                  
                </Box>
                <Box  w="50%">
                  <Button color={toggle?'white':'black'} backgroundColor={toggle?'teal':''} _hover={{backgroundColor:'rgb(0,50,120)'}} onClick={()=>settoggle(true)}  w="100%">Signup</Button>
                </Box>
              </HStack>
              <br/>
              {toggle?
            <Stack spacing={4} >
              
              <FormControl id="email" isRequired>
                
                <Input type="email" value={signemail} placeholder='email' onChange={(e)=>setsignemail(e.target.value)} />
              </FormControl>


              <FormControl id="password" isRequired>
                
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} placeholder='password' value={signpass} onChange={(e)=>setsignpass(e.target.value)} />
                  <InputRightElement h={'100%'}>
                    <Button
                     
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>


              <FormControl id="password" isRequired>
               
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} placeholder='confirm password' value={signconpass} onChange={(e)=>setsignconpass(e.target.value)}/>
                  <InputRightElement h={'100%'}>
                    <Button
                      
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'teal'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handlesignup}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <span onClick={()=>settoggle(false)} style={{color:'rgb(73, 153, 244)'}}>Login</span>
                </Text>
              </Stack>
            </Stack>:
            
            <Stack spacing={4} >
              
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={logemail} onChange={(e)=>setlogemail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={logpass} onChange={(e)=>setlogpass(e.target.value)} />
                <InputRightElement h={'100%'}>
                  <Button
                    
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                
                size="lg"
                bg={'teal'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={handlelogin}>
               Login
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                New user? <span onClick={()=>settoggle(true)} style={{color:'rgb(73, 153, 244)'}}>Register</span>
              </Text>
            </Stack>
          </Stack>}
          </Box>
        </Stack>
     
    );
  }