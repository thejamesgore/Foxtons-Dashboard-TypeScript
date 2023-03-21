import React, { useContext } from "react";
import { useList } from '@pankod/refine-core'
import { Box, Typography, Stack} from '@pankod/refine-mui'

import { ColorModeContext } from "contexts";
import { PieChart, ContractProgress, TotalRevenue, InfoChart, } from 'components'

const Home = () => {
   const { mode } = useContext(ColorModeContext);

  return (
    <Box>
      <Typography 
        fontSize={25}
        fontWeight={700}
        color={mode === 'dark' ? '#fcfcfc' : '#11142D' }
        align="center"
      >Dashboard</Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <InfoChart 
          title="Portfolio value"
          value='£67,497,384'

        />
        <InfoChart 
          title="Properties in portfolio"
          value='84'

        />

        <PieChart 
          title="Properties with tennants"
          value={67}
          series={[79, 21]}
          colors={['#017062', '#77bc52']}
        />
        <PieChart 
          title="Properties on the market"
          value={16}
          series={[16, 84]}
          colors={['#017062', '#77bc52']}
        />
      </Box>

      <Stack 
        mt='25px' 
        width="100%"
        gap={4}
        direction={{xs: 'column', lg: 'row'}}>
          <TotalRevenue />
          <ContractProgress />
      </Stack>
      
    </Box>
  )
}

export default Home