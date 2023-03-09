import React, { useContext } from "react";
import { Typography, Stack, Box } from '@pankod/refine-mui'

import {  InfoChartProps } from 'interfaces/home'
import { ColorModeContext } from "contexts";

const InfoChart = ({title, value}: InfoChartProps) => {
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
        color={mode === 'dark' ? '#FFF' : '#11142d'}
        mt={1}
      >{value}</Typography>
      </Stack>
      </Box>
  )
}

export default InfoChart