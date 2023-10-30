import React, { useEffect, useState } from 'react'
import { Card,Box, CardHeader, CardBody, CardFooter, Image ,Stack, Heading, Text, Divider,ButtonGroup, Button} from '@chakra-ui/react'
import { Nav } from '../components/Nav'


export const Dashboard = () => {

  const [data,setData] = useState([])
   console.log(data, "docData")
   useEffect(() => {
    fetchData();
  },[])

  const fetchData = async() => {

    try {
      let res = await fetch("https://tiny-blue-angler-kit.cyclic.app/doctor/");
      let data = await res.json();
      
      let docData = data.msg
      console.log(docData, "mydata");
      setData(docData)

    } catch (error) {
      
      console.log(error.message)

    }

  }


  return (
    <>


   <Nav/>
<Box display = "grid" gridTemplateColumns="repeat(2,1fr)" gap = "10px" >{

data && data.map((item) => (
<Card maxW='sm'>
  <CardBody>
    <Image
      src={item.image}
      alt='Image'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3' textAlign = "left" >
      <Heading size='md' textAlign = "center">{item.name}</Heading>
      <Text>
        Specialisation : {item.specialization}
      </Text>
      <Text>
        Experience : {item.experience}
      </Text>
      <Text>
        Location : {item.location}
      </Text>
      <Text>
        Date : {item.date}
      </Text>
      <Text>
        Slots : {item.slots}
      </Text>
      <Text color='teal' fontSize='xl'>
        Fee : ${item.fee}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='teal'>
        Edit
      </Button>
      <Button colorScheme='teal'>
        Delete
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


))

    }
    
    </Box>
    </>
  )
}
