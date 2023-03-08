import React, { useContext } from "react";
import { useList } from '@pankod/refine-core'
import { Box, Typography, Stack} from '@pankod/refine-mui'

import { ColorModeContext } from "contexts";
import { PieChart, PropertyReferrals, TotalRevenue, InfoChart, } from 'components'

const Home = () => {
   const { mode } = useContext(ColorModeContext);

  return (
    <Box>
      <Typography 
        fontSize={25}
        fontWeight={700}
        color={mode === 'dark' ? '#fcfcfc' : '#11142D' }  
      >Dashboard</Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <InfoChart 
          title="Portfolio value"
          value='£67,497,384'

        />

       <PieChart 
          title="Properties in portfolio"
          value={84}
          series={[0, 0]}
          colors={['#275be8', '#c4e8ef']}
        />
        <PieChart 
          title="Properties with tennants"
          value={67}
          series={[79, 21]}
          colors={['#017062', '#77bc52']}
        />
        <PieChart 
          title="Commercial vs Residential Properties"
          value={23}
          series={[27, 73]}
          colors={['#017062', '#77bc52']}
        />
      </Box>

      <Stack 
        mt='25px' 
        width="100%"
        gap={4}
        direction={{xs: 'column', lg: 'row'}}>
          <TotalRevenue />
          <PropertyReferrals />

      </Stack>
      
    </Box>
  )
}

export default Home