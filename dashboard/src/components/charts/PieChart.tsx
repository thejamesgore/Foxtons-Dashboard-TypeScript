import { Typography, Stack, Box } from '@pankod/refine-mui'
import React, { useContext } from "react";
import ReactApexChart from 'react-apexcharts'

import { PieChartProps } from 'interfaces/home'
import { ColorModeContext } from "contexts";


const PieChart = ({title, value, series, colors}: PieChartProps) => {
  const { mode } = useContext(ColorModeContext);

  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor={mode === 'dark' ? '#000' : '#fcfcfc'}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography
          fontSize={14}
          color={mode === 'dark' ? '#FFF' : '#808191'}>
            {title}
        </Typography>
      <Typography
        fontSize={24}
        color={mode === 'dark' ? '#FFF' : '#000'}
        mt={1}
      >{value}</Typography>
      </Stack>

      <ReactApexChart
        options={{
        chart: {type: 'donut'},
        colors,
        legend: { show: false},
        dataLabels: {enabled: false}
      }}
      series={series}
      type="donut"
      width="120px"
      ></ReactApexChart>

      

    </Box>
  )
}

export default PieChart