import ExtensionOffOutlinedIcon from '@mui/icons-material/ExtensionOffOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import BargashtiDialog from "../dialogs/bargashti";
import KhadamatDialog from "../dialogs/khadamat";
import ModulesDialog from '../dialogs/modules';



const ModulesButtons = () => {
    const [modulesOpen, setModulesOpen] = useState(false);
    const [bargashtiOpen, setBargashtiOpen] = useState(false);
    const [khadamatOpen, setKhadamatOpen] = useState(false);

    const openModulesDialog = () => {
        setModulesOpen(true);
    };

    const openBargashtiDialog = () => {
        setBargashtiOpen(true);
    };

    const openKhadamatDialog = () => {
        setKhadamatOpen(true);
    };

    return (
        <Box sx={{ width:'68%', padding:1.5, backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px) saturate(180%)', border: '1px solid rgba(38, 66, 77, 0.5)', borderRadius: 5, boxShadow: 3, mt:1 }}>
            <Stack spacing={2}>
                <Button onClick={openModulesDialog} variant="contained" endIcon={<ExtensionOutlinedIcon />}><Typography sx={{ ml: 5.5 }}>افزودن کیت و ماژول</Typography></Button>
                <Button onClick={openBargashtiDialog} variant="contained" endIcon={<ExtensionOffOutlinedIcon />}><Typography sx={{ ml: 5.5 }}>کیت و ماژول برگشتی</Typography></Button>
                <Button onClick={openKhadamatDialog} variant="contained" endIcon={<ManageAccountsOutlinedIcon />}><Typography sx={{ ml: 3 }}>افزودن خدمات کارشناسی</Typography></Button>
            </Stack>

            <ModulesDialog open={modulesOpen} setOpen={setModulesOpen} />
            <BargashtiDialog open={bargashtiOpen} setOpen={setBargashtiOpen} />
            <KhadamatDialog open={khadamatOpen} setOpen={setKhadamatOpen} />
        </Box>
    );
}
 
export default ModulesButtons;