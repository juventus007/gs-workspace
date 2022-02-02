import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Container } from '@mui/material';
import { withStyles } from '@mui/styles';
import { StepOne } from './components/StepOne';
import { StepTwo } from './components/StepTwo';
import { StepThree } from './components/StepThree';
import { Confirm } from './components/Confirm';
import { AppContext } from './context/AppContext';

const steps = [
  'First',
  'Second',
  'Third', 
  'Confirm'
];

const handleSteps = (step) => {
  switch (step) {
    case 0:
      return <StepOne />
    case 1:
      return <StepTwo />
    case 2:
      return <StepThree />
    case 3:
      return <Confirm />
    default:
      throw new Error('Unknown step')
  }
}

const styles = theme => ({
  
  stepIcon: {
    color: "#664de5"
  },
});

const Onboard = (props) => {
  const [state, dispatch] = useContext(AppContext);

  const { classes } = props;  
  return  (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Box sx={{ width: '100%' }}>
          
          <Stepper className={classes.root} activeStep={state.activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel 
                  StepIconProps={{
                    classes: { root: classes.stepIcon }
                  }}>
                </StepLabel>
              </Step>
            ))}  
          </Stepper>

          
        </Box>
      </Container>
      {handleSteps(state.activeStep)}

    </React.Fragment>
  );
}

export default withStyles( styles )( Onboard );