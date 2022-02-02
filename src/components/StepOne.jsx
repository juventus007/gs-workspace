import { FormControl, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { ButtonModule } from "./ButtonModule";


export const StepOne = () => {
    const [state, dispatch] = useContext(AppContext);
    const [nameError, setNameError] = useState('');
    const [displayNameError, setDisplayNameError] = useState('');
    const [name, setName] = useState(state.name || '');
    const [displayName, setDisplayName] = useState(state.displayName || '');
    const [activeStep, setActiveStep] = useState(state.activeStep || 0);

    const handleStepChange = () => {
        if (name === "" || displayName === "") return;
        dispatch({  type: "SAVE_PERSONAL_INFO", name: name, displayName: displayName})
        dispatch({  type: "CHANGE_STEP", activeStep: activeStep})
    }

    function handleChange(e) {
        e.preventDefault()
        const { id, value } = e.target; 

        if(id === 'name') { 
            setName(value) 
        } else {
            setDisplayName(value)
        }
    }
    
    return (
        <>
            <Typography variant='h4'><strong>Welcome First things first...</strong></Typography>
            <p>You can always change them later</p><br />

            <FormControl sx={{ width: '60ch' }}>
                <label htmlFor="name" style={{display: 'flex', alignItems: 'flex-start', marginBottom: '5px'}}>Full Name</label>
                <TextField
                    helperText={nameError ? nameError : ''}
                    id="name"
                    placeholder="Steve Jobs"
                    value={name}
                    onChange={(e) => handleChange(e)}
                /><br />

                <label htmlFor="display-name" style={{display: 'flex', alignItems: 'flex-start', marginBottom: '5px'}}>Display Name</label>
                <TextField
                    helperText={displayNameError ? displayNameError : ''}
                    id="displayName"
                    placeholder="Steve"
                    value={displayName}
                    onChange={(e) => handleChange(e)}
                /><br />
                <ButtonModule onClick={() => handleStepChange()} text={"Create Workspace"} />

            </FormControl>
        </>
    );  
};