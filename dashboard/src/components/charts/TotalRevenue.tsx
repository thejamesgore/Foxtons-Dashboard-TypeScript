import React, { useContext } from "react";
import { Typography, Stack, Box } from '@pankod/refine-mui'
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts'
import { ArrowCircleDownRounded } from '@mui/icons-material'

import {  TotalRevenueSeries } from './chart.config'
import { ColorModeContext } from "contexts";



const TotalRevenue = () => {
  const { mode } = useContext(ColorModeContext);

  const TotalRevenueOptions: ApexOptions = {

  
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: [  '#017062', '#67be23'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
    
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',],
    
  },
  yaxis: {
    title: {
      text: '£ (thousands)',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `£ ${val} thousands`;
      },
    },
  },
};

  return (
    <Box
      p={4}
      flex={1}
      bgcolor={mode === 'dark' ? '#000' : '#fcfcfc'}
      id='chart'
      display='flex'
      flexDirection='column'
      borderRadius='15px'
    >
      <Typography
        fontSize={18}
        fontWeight={600}
        color={mode === 'dark' ? '#FFF' : '#11142d'}
      >
        Total Revenue YTD
      </Typography>
      <Stack
        my="20px"
        direction="row"
        gap={4}
        flexWrap='wrap'
      >
        <Typography
          fontSize={28}
          fontWeight={700}
          color={mode === 'dark' ? '#FFF' : '#11142d'}
        >£8,236,535</Typography>
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
        >
          <ArrowCircleDownRounded
            sx={{
              fontSize: 25,
              color: '#017062'
            }}/>
            <Stack
            
            >
              <Typography
                fontSize={15}
                color='#017062'
              >
                11.8%
              </Typography>
              <Typography
                fontSize={12}
                color={mode === 'dark' ? '#FFF' : '#808191'}
              >
                Than last month
              </Typography>
            </Stack>
        </Stack>
      </Stack>
      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  )
}

export default TotalRevenue