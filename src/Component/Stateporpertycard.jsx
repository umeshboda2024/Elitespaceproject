import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Ahemdabadimage from "../Assets/images/Ahemdabadstate.jpg"
const Stateporpertycard = () => {

    const Stateproperty =[
        {image: Ahemdabadimage}
    ]
  return (
    <div>
      <Box>
        <Container>
            <Grid>
                <Grid>
                    { Stateproperty.map((state,index) =>{
                        <Box  
                          component="img"
                          src={state.image}
                        >

                        </Box>
                        
                    })

                    }
                </Grid>
            </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Stateporpertycard;
