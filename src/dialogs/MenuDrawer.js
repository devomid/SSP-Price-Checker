import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import About from "./about";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HelpDialog from "./help";
const { ipcRenderer } = window.require('electron');



const MenuDrawer = ({ open, setOpen }) => {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);


    const closeDrawer = (state) => {
        setOpen(state);
    };

    const openAbout = () => {
        setAboutOpen(true);
        setOpen(false);
    };


    return (
        <>
            <Drawer anchor="bottom" open={open} onClose={() => closeDrawer(false)}>

                <Box role="presentation">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemText onClick={() => {
                                    setHelpOpen(true);
                                    closeDrawer(false);
                                }} primary='راهنما' />
                                <ListItemIcon>
                                    <HelpOutlineOutlinedIcon sx={{ mr: 2 }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText onClick={openAbout} primary='درباره نرم افزار' />
                                <ListItemIcon>
                                    <InfoOutlinedIcon sx={{ mr: 2 }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText onClick={() => { ipcRenderer.send('bye', []) }} src={""} primary='خروج' />
                                <ListItemIcon>
                                    <CancelOutlinedIcon sx={{ mr: 2 }} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <About open={aboutOpen} setOpen={setAboutOpen} />
            <HelpDialog open={helpOpen} setOpen={setHelpOpen} />
        </>
    );
};

export default MenuDrawer;