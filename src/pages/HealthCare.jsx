import { Box } from '@chakra-ui/react'
import React from 'react'
import AnimatedBanner from '../components/AnimatedBanner'
import HealthCard from '../components/HealthCard'

const HealthCare = () => {
  return (
    <Box>
        <AnimatedBanner/>

        <HealthCard/>
    </Box>
  )
}

export default HealthCare
