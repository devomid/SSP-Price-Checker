import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import React from "react";

const About = ({ open, setOpen }) => {

    const about = 'نرم افزار پیش رو جهت تسهیل محاسبه و یکپارچگی قیمت های نرم افزارهای مختلف هلو و جلوگیری از خطای انسانی در هنگام محاسبات فروش, توسط تیم تحقیق و توسعه مجموعه سراج سبز پارتیکان آماده سازی و تولید شده و در اختیار کاربران قرار گرفته است ';

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box >
            <Dialog sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px) saturate(280%)' }} open={open} keepMounted onClose={handleClose} scroll="paper">
                <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>درباره نرم افزار</DialogTitle>
                <DialogContent dividers>
                    <Box sx={{ height: 200, mt: 2 }}>
                        <Stack spacing={8}>
                            <Typography textAlign={"center"}>{about}</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <img width='90' height='25' src={require('../assets/images/Holoo-500.png')} />
                                <img width='85' height='20' src={require('../assets/images/logo-f.png')} />
                            </Box>
                        </Stack>
                        <Box sx={{ width: '100%', mt: 10, mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography color='info' variant="caption" textAlign="center" sx={{ whiteSpace: 'pre-line' }} >
                                سراج سبز پارتیکان{'\n'}
                                SSP Price Calculation Utility{'\n'}
                                created and developed by: Omid Azad{'\n'}
                                Date created: May 5th 2024{'\n'}
                                Ver 2.3.3
                            </Typography>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Stack direction='row' spacing={1} sx={{ width: '100%', m: '10px 5px' }} justifyContent='space-around'>
                        <Button sx={{ width: '100%', height: 50 }} color="primary" variant="outlined" onClick={handleClose}>باشه</Button>
                    </Stack>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default About;