import { Box, Button, Typography } from "@mui/material";
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import { GeneralState } from "../context/generalContext";
const { ipcRenderer } = window.require('electron');



const ButtonsSection = () => {
    const { calc, setCalc, resetState, setResetState } = GeneralState();

    const handleChange = () => {
        setCalc(!calc);
    };

    const handleResetChange = () => {
        setResetState(!resetState);
    };


    return (

        <Box sx={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px) saturate(180%)', border: '1px solid rgba(38, 66, 50, 0.5)', borderRadius: 5, boxShadow: 3, p: 1.5, display: 'flex', flexDirection: 'row', mt:1 }}>

            <Button color="info" sx={{ width: '50%' }} variant="outlined" endIcon={<CalculateOutlinedIcon sx={{ width: 35, height: 35 }} />} onClick={handleChange} >
                <Typography variant="h6" sx={{ ml: 4 }}>
                    محاسبه
                </Typography>
            </Button>
            <Button onClick={() => {
                { ipcRenderer.send('reset', []) }
            }} color="warning" sx={{ mr: 2, width: '50%' }} variant="outlined" endIcon={<RestartAltOutlinedIcon sx={{ width: 35, height: 35 }} />}>
                <Typography variant="h6" sx={{ ml: 4 }}>
                    پاک کردن فرم
                </Typography>
            </Button>
        </Box>
    );
};

export default ButtonsSection;