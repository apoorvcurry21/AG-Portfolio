import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import DeviceFrameImage from './DeviceFrameImage';
import mobile1 from "../../img/mobile1.jpeg";

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   
   // Check if this is our SpinSync project
   const isSpinSync = title === "SpinSync: Table Tennis Finder";
   
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         {isSpinSync ? (
            <Box sx={{ mb: '-1.5rem' }}>
              <DeviceFrameImage laptopImage={image} mobileImage={mobile1} alt={title} />
            </Box>
         ) : (
            <Box component={'img'} src={image} alt={'mockup'} />
         )}
         <h1 style={{fontSize: '2rem', marginTop: '0.5rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'1rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;