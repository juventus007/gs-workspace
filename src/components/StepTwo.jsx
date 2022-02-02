import { FormControl, Grid, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { ButtonModule } from "./ButtonModule";


export const StepTwo = () => {
    const [state, dispatch] = useContext(AppContext);
    const [workspaceNameError, setWorkspaceNameError] = useState('');
    const [workspaceURLError, setWorkspaceURLError] = useState('');
    const [workspaceName, setWorkspaceName] = useState(state.workspaceName || '');
    const [workspaceURL, setWorkspaceURL] = useState(state.workspaceURL || '');
    const [activeStep, setActiveStep] = useState(state.activeStep || 0);

    const handleStepChange = () => {
        if (workspaceName === "" || workspaceURL === "") return;
        dispatch({  type: "SAVE_WORKSPACE_INFO", workspaceName: workspaceName, workspaceURL: workspaceURL})
        dispatch({  type: "CHANGE_STEP", activeStep: activeStep})
    }

    function handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target; 

        if(name === 'workspaceName') { 
            setWorkspaceName(value) 
        } else {
            setWorkspaceURL(value)
        }
    }
    
    return (
        <>
            <Typography variant='h4'><strong>Lets setup a home for all your work</strong></Typography>
            <p>You can always create another workspace later</p><br />

            <FormControl sx={{ width: '60ch' }}>
                <label htmlFor="name" style={{display: 'flex', alignItems: 'flex-start', marginBottom: '5px'}}>Workspace Name</label>
                <TextField
                    helperText={workspaceNameError ? workspaceNameError : ''}
                    id="workspace-name"
                    placeholder="Eden"
                    name='workspaceName'
                    value={workspaceName}
                    onChange={(e) => handleChange(e)}
                /><br />

                <label htmlFor="display-name" style={{display: 'flex', alignItems: 'flex-start', marginBottom: '5px'}}>Workspace URL <span style={{ color: 'grey'}}> (optional)</span></label>
                <Grid style={{ display: "flex", alignItems: "flex-start"}}>
                    <TextField
                        id="sample"
                        variant='filled'
                        disabled
                        defaultValue="www.eden.com/"
                        style={{width: "30ch"}}
                    />
                    <TextField
                        helperText={workspaceURLError ? workspaceURLError : ''}
                        id="workspaceURL"
                        placeholder="Example"
                        name="workspaceURL"
                        value={workspaceURL}
                        style={{width: "30ch"}}
                        onChange={(e) => handleChange(e)}
                    />
                </Grid><br />
                <ButtonModule onClick={() => handleStepChange()} text={"Create Workspace"} />

            </FormControl>
        </>
    );  
};