import MoreVertIcon from '@mui/icons-material/MoreVert';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import { AppBar, Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import { useState } from "react";
import { GeneralState } from "../context/generalContext";
import MenuDrawer from "../dialogs/MenuDrawer";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {printRes, setPrintRes} = GeneralState();

    const openDrawer = () => {
        setDrawerOpen(true);
    };

    const printIt = () => {
        setPrintRes(true)
    }

    return (
        <Box sx={{ flexGrow: 1, pt: 2 }}>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <IconButton onClick={openDrawer} edge="start" color="inherit" aria-label="menu">
                        <MoreVertIcon />
                    </IconButton>
                    <Tooltip title="چاپ نتایج" placement="right" >
                    <IconButton onClick={printIt} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <PrintOutlinedIcon />
                    </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>

            <MenuDrawer open={drawerOpen} setOpen={setDrawerOpen} />
        </Box>
    );
}

export default Navbar;