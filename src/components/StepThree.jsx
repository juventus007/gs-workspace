
import { Card, CardActions, CardContent, FormControl, Grid, IconButton, Typography } from "@mui/material";
import { useContext, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import { AppContext } from "../context/AppContext";
import { ButtonModule } from "./ButtonModule";


export const StepThree = () => {
    const [state, dispatch] = useContext(AppContext);
    const [selfOwned, setSelfOwned] = useState(state.selfOwned || false);
    const [teamOwned, setTeamOwned] = useState(state.teamOwned || false);
    const [activeStep, setActiveStep] = useState(state.activeStep || 0);

    const handleStepChange = () => {
        if (selfOwned === "" || teamOwned === "") return;
        dispatch({  type: "SAVE_OWNERSHIP_INFO", selfOwned: selfOwned, teamOwned: teamOwned})
        dispatch({  type: "CHANGE_STEP", activeStep: activeStep})
    }

    function handleChange(e) {
        e.preventDefault()
        setSelfOwned(!selfOwned) 
        setTeamOwned(!teamOwned)
    }
    
    return (
        <>
            <Typography variant='h4'><strong>How are you planning to use Eden?</strong></Typography>
            <p>We'll streamline your setup experience accordingly.</p><br />
            <FormControl sx={{ width: '60ch' }}>
                <Grid style={{ display: "flex", alignItems: "flex-start", paddingBottom: '10%'}}>
                    <Card style={selfOwned ? { border: '2px solid #664de5'} : {}} name="selfOwned" onClick={(e) => handleChange(e)}>
                        <CardActions disableSpacing>
                            <IconButton aria-label="person">
                                <PersonIcon  size="large" style={{color: "#664de5"}} />
                            </IconButton>
                        </CardActions>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <strong>For Myself</strong>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Write better. Think more clearly. Stay organized.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={teamOwned ? { border: '2px solid #664de5'} : {}} name="teamOwned" onClick={(e) => handleChange(e)}>
                        <CardActions disableSpacing>
                            <IconButton aria-label="person-group">
                                <GroupsIcon size="large" style={{color: "#664de5"}} />
                            </IconButton>
                        </CardActions>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <strong>With My Team</strong>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Wikis, docs, tasks & projects, all in one in one place. 
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <ButtonModule onClick={() => handleStepChange()} text={"Create Workspace"} />
            </FormControl>
        </>
    );  
};