import React from "react";
import {Flex} from "@chakra-ui/react"
import {Link} from "react-router-dom"

export const Nav = () => {
    return (
      <div>
  
  <Flex align="center" justify = "space-around" width = "100%" height = "60px" border = "1px solid blue" mb = "40px" >
  
  <Link to = "/appointment" >Appointments</Link>
  <Link to = "/dashboard" >Doctor's Dashboard</Link>
  
  </Flex>
  
      </div>
    )
  }
