import { Button } from "@mui/material";


export const ButtonModule = (props) => {

    return (
        <Button variant="contained" style={{ height: '50px', backgroundColor: '#664de5', textTransform: 'none'}} onClick={props.onClick}>{props.text}</Button>
    );  
};