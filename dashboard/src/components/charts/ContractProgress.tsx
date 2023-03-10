import React, { useContext } from "react";
import { Box, Stack, Typography} from '@pankod/refine-mui';

import { contractProgressInfo } from 'constants/index';
import { ColorModeContext } from "contexts";

interface ProgressBarProps {
  title: string,
  percentage: number,
  color: string,
  mode: string,
}



const ProgressBar = ({ title, percentage, color, mode }: ProgressBarProps) => (
  
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color={mode === 'dark' ? '#FFF' : "#11142d"}>{title}</Typography>
      <Typography fontSize={16} fontWeight={500} color={mode === 'dark' ? '#FFF' : "#11142d"}>{percentage}%</Typography>
    </Stack>
    <Box mt={2} position="relative" width="100%" height="8px" borderRadius={1} bgcolor="#e4e8ef">
      <Box
        width={`${percentage}%`}
        bgcolor={color}
        position="absolute"
        height="100%"
        borderRadius={1}
        />
    </Box>
  </Box>
)

const ContractProgress = () => {
  const { mode } = useContext(ColorModeContext);

  return (
    <Box
      p={4}
      bgcolor={mode === 'dark' ? '#000' :"#fcfcfc"}
      id="chart"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color={mode === 'dark' ? '#FFF' : "#11142d"}>
        Contract progress
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
        {contractProgressInfo.map((bar) => <ProgressBar mode={mode} key={bar.title} {...bar} />)}
      </Stack>
    </Box>
  )
}

export default ContractProgress