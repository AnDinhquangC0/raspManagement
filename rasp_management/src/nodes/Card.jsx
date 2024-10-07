// Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardActions, CardContent, Typography, Button, Box } from '@mui/material';

const NodeCard = ({ result }) => {
  NodeCard.propTypes = {
    result: PropTypes.shape({
      id: PropTypes.string.isRequired, // assuming id is a string
      title: PropTypes.string.isRequired,
      nodeInfo: PropTypes.shape({
        model: PropTypes.string,
        sdrDevice: PropTypes.string,
        sdrService: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };
  return (
    <Card sx={{ maxWidth: 290 }}>
      <CardActionArea>
        {/* Title */}
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div" 
            align="center" 
            sx={{ fontWeight: 'bold', lineHeight: '1'}}
          >
            {result.title}
          </Typography>

          <Box 
            sx={{ 
              marginTop: 0.5, 
              display: 'grid', 
              paddingBottom: 0,
              gridTemplateColumns: '3.75fr 6.25fr', 
              gap: 1, 
              flexGrow: 1 
            }}
          >
            {/* Row 1: Node ID */}
            <Typography 
              variant="body2" 
              sx={{ 
                display: '-webkit-box',
                WebkitLineClamp: 2, // Limit to 2 lines
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                borderBottom: '1px solid #ddd', // Add bottom border
                paddingBottom: '4px'
              }}
            >
              Node ID:
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                display: '-webkit-box',
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                borderBottom: '1px solid #ddd', 
                paddingBottom: '4px'
              }}
            >
              {result.id}
            </Typography>

            {/* Row 2: Raspberry Model */}
            <Typography 
              variant="body2" 
              sx={{ 
                display: '-webkit-box',
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                borderBottom: '1px solid #ddd', 
                paddingBottom: '4px'
              }}
            >
              Raspberry Model:
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                display: '-webkit-box',
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                borderBottom: '1px solid #ddd', 
                paddingBottom: '4px'
              }}
            >
              {result.nodeInfo.model}
            </Typography>

            {/* Row 3: SDR Device */}
            <Typography 
              variant="body2" 
              sx={{ 
                display: '-webkit-box',
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                borderBottom: '1px solid #ddd', 
                paddingBottom: '4px'
              }}
            >
              SDR Device:
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                display: '-webkit-box',
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                borderBottom: '1px solid #ddd', 
                paddingBottom: '4px'
              }}
            >
              {result.nodeInfo.sdrDevice}
            </Typography>

            {/* Row 4: SDR Service */}
            <Typography 
              variant="body2" 
              sx={{ 
                display: '-webkit-box',
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                // borderBottom: '1px solid #ddd', 
                // paddingBottom: '4px'
              }}
            >
              SDR Service:
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                display: '-webkit-box',
                WebkitLineClamp: 2, 
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                // borderBottom: '1px solid #ddd', 
                // paddingBottom: '4px'
              }}
            >
              {result.nodeInfo.sdrService}
            </Typography>
          </Box>
        </CardContent>
        {/* <Button size="small" color="primary" align="center">
          Share
        </Button> */}
      </CardActionArea>
        
    </Card>
  );

};

export default NodeCard;
