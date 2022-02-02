
import { FormControl, IconButton, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { ButtonModule } from "./ButtonModule";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Confirm = () => {
    const [state, dispatch] = useContext(AppContext);
    const [displayName, setDisplayName] = useState(state.displayName || '');
    
    const handleStepChange = () => {
        dispatch({  type: "CHANGE_STEP", activeStep: 0})
    }

    return (
        <>
            <IconButton aria-label="person">
                <CheckCircleIcon size="large" style={{color: "#664de5"}} />
            </IconButton>
            <Typography variant='h4' ><strong>Congratulations, {displayName}</strong></Typography>
            <p>You have completed onboarding, you can start using the Eden!</p><br />

            <FormControl sx={{ width: '60ch' }}>
                <ButtonModule onClick={() => handleStepChange()} text={"Launch Eden"} />
            </FormControl>
        </>
    );  
};