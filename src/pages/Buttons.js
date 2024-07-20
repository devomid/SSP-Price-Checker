import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import { Box, Button, Typography } from "@mui/material";
import { GeneralState } from "../context/generalContext";
const { ipcRenderer } = window.require('electron');



const ButtonsSection = () => {
    const { calc, setCalc } = GeneralState();

    const handleChange = () => {
        setCalc(!calc);
    };

    return (

        <Box sx={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px) saturate(180%)', border: '1px solid rgba(38, 66, 50, 0.5)', borderRadius: 5, boxShadow: 3, p: 1.5, display: 'flex', flexDirection: 'row', mt: 1 }}>

            <Button onClick={() => {
                { ipcRenderer.send('reset', []) }
            }} color="warning" sx={{ ml: 2, width: '50%' }} variant="outlined" endIcon={<RestartAltOutlinedIcon sx={{ width: 35, height: 78 }} />}>
                <Typography variant="h5" sx={{ ml: 4 }}>
                    پاک کردن فرم
                </Typography>
            </Button>

            <Button color="info" sx={{ width: '50%' }} variant="outlined" endIcon={<CalculateOutlinedIcon sx={{ width: 35, height: 78 }} />} onClick={handleChange} >
                <Typography variant="h5" sx={{ ml: 4 }}>
                    محاسبه
                </Typography>
            </Button>
        </Box>
    );
};

export default ButtonsSection;