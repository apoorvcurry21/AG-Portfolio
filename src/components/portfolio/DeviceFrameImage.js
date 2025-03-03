import React from 'react';
import { Box } from "@mui/material";

/**
 * Component that displays both laptop and mobile device frames with screenshots
 * Laptop frame styled to match mock1 with proper image display
 */
function DeviceFrameImage(props) {
  const { laptopImage, mobileImage, alt } = props;
  
  return (
    <Box position="relative" width="100%" sx={{ mb: 4, mt: 2 }}>
      {/* Laptop frame */}
      <Box
        sx={{
          position: 'relative',
          width: '90%',
          maxWidth: '700px',
          margin: '0 auto',
          zIndex: 1,
          transform: 'perspective(1000px) rotateX(5deg)',
          transformOrigin: 'center bottom',
        }}
      >
        {/* Laptop top part (screen) */}
        <Box
          sx={{
            background: '#252525',
            border: '2px solid #333',
            borderBottom: 'none',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            padding: '10px 10px 8px',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.25)',
          }}
        >
          {/* Top bar with circles */}
          <Box 
            sx={{
              display: 'flex',
              gap: '6px',
              mb: '8px'
            }}
          >
            <Box sx={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }}></Box>
            <Box sx={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }}></Box>
            <Box sx={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }}></Box>
          </Box>
          
          {/* Screen content */}
          <Box
            sx={{
              background: '#fff',
              borderRadius: '3px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: 'inset 0 0 2px rgba(0,0,0,0.2)',
            }}
          >
            <Box
              component="img"
              src={laptopImage}
              alt={alt || "Laptop view"}
              sx={{
                display: 'block',
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
        
        {/* Laptop bottom part (keyboard) */}
        <Box
          sx={{
            background: '#252525',
            border: '2px solid #333',
            borderTop: 'none',
            height: '15px',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.25)',
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              left: '50%',
              top: '5px',
              transform: 'translateX(-50%)',
              width: '30%',
              height: '3px',
              background: '#444',
              borderRadius: '2px'
            }
          }}
        ></Box>
      </Box>
      
      {/* Mobile phone frame */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-5%',
          right: '2%',
          width: '22%',
          maxWidth: '160px',
          minWidth: '120px',
          zIndex: 2,
          background: '#111',
          borderRadius: '24px',
          padding: '8px',
          border: '2px solid #000',
          boxShadow: '0px 10px 20px rgba(0,0,0,0.3)',
        }}
      >
        {/* Phone notch */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            height: '18px',
            width: '40%',
            background: '#111',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            zIndex: 3
          }}
        ></Box>
        
        {/* Phone screen */}
        <Box
          sx={{
            background: '#fff',
            borderRadius: '16px',
            overflow: 'hidden',
            height: 0,
            paddingBottom: '200%', // Mobile aspect ratio
            position: 'relative'
          }}
        >
          <Box
            component="img"
            src={mobileImage}
            alt="Mobile view"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        
        {/* Phone home button indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '3px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '30%',
            height: '3px',
            background: '#333',
            borderRadius: '2px'
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default DeviceFrameImage; 