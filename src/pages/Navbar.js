import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuDrawer from "../dialogs/MenuDrawer";
import { useState } from "react";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const openDrawer = () => {
        setDrawerOpen(true);
    };

    return (
        <Box sx={{ flexGrow: 1, pt: 2 }}>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <IconButton onClick={openDrawer} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <WidgetsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <MenuDrawer open={drawerOpen} setOpen={setDrawerOpen} />
        </Box>
    );
}

export default Navbar;