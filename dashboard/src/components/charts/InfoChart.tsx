import { Typography, Stack, Box } from '@pankod/refine-mui'

import {  InfoChartProps } from 'interfaces/home'

const InfoChart = ({title, value}: InfoChartProps) => {
  return (
        <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="#fcfcfc"
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
          color="#808191">
            {title}
        </Typography>
      <Typography
        fontSize={24}
        color="#11142d"
        mt={1}
      >{value}</Typography>
      </Stack>
      </Box>
  )
}

export default InfoChart