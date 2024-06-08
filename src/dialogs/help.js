import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material';
import { useState } from 'react';
import FroshJadid from '../help pages/frooshJadid';
import ModulesKhadamat from '../help pages/modules';
import Example from '../help pages/modulesExample';
import Results from '../help pages/results';
import SaleAndUpgrade from '../help pages/saleAndUpgrade';
import Sayer from '../help pages/sayer';
import Takhfifat from '../help pages/takhfif';
import Tamdid from '../help pages/tamdid';
import UpgradeChandSherkati from '../help pages/upgradeChandShrekati';

const HelpDialog = ({ open, setOpen }) => {
    const [helpPage, setHelpPage] = useState(1);

    const next = () => {
        setHelpPage(helpPage + 1)
    };

    const previous = () => {
        setHelpPage(helpPage - 1)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const renderHelpPage = () => {
        switch (helpPage) {
            case 1:
                return <SaleAndUpgrade />
            case 2:
                return <UpgradeChandSherkati />
            case 3:
                return <FroshJadid />
            case 4:
                return <Tamdid />
            case 5:
                return <Sayer />
            case 6:
                return <ModulesKhadamat />
            case 7:
                return <Example />
            case 8:
                return <Takhfifat />
            case 9:
                return <Results />
        }
    };

    return (
        <Box  >
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>درباره نرم افزار</DialogTitle>
                <DialogContent sx={{ height: 600 }} dividers>
                    {renderHelpPage()}
                </DialogContent>
                <DialogActions>
                    <Stack direction='row' spacing={1} sx={{ width: '100%', m: '10px 5px' }} justifyContent='space-around'>
                        <Button sx={{ width: '30%' }} color="warning" variant="outlined" onClick={handleClose}>باشه</Button>
                        {helpPage > 1 ? (
                            <Button sx={{ width: '30%' }} color="secondary" variant="outlined" onClick={previous}>قبلی</Button>
                        ) : (
                            <Button disabled sx={{ width: '30%' }} color="primary" variant="outlined" onClick={previous}>قبلی</Button>
                        )}

                        {helpPage < 9 ? (
                            <Button sx={{ width: '30%' }} color="primary" variant="outlined" onClick={next}>بعدی</Button>
                        ) : (
                            <Button disabled sx={{ width: '30%' }} color="primary" variant="outlined" onClick={next}>بعدی</Button>
                        )}

                    </Stack>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default HelpDialog;