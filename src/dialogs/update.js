import { Box, CircularProgress, Dialog, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import { useState } from "react";
const { ipcRenderer } = window.require('electron');


const UpdateModal = ({open, setOpen}) => {
    const [text, setText] = useState('');
    const [progress, setProgress] = useState(0);
    const [total, setTotal] = useState(0);
    const [speed, setSpeed] = useState(0);

    ipcRenderer.on('updateMsg', (event, message) => {
        if (message.type === 'available'){
            setText('ورژن شما به روز نیست. کمی صبر کنید تا بروزرسانی انجام شود')
        }
    });
    
    ipcRenderer.on('updateMsg', (event, message) => {
        if (message.type === 'notAvalable'){
            setText('ورژن شما به روز است و احتیاجی به بروزرسانی نیست')
            setTimeout(() => {
                setOpen(false)
            }, 1500);
        }
    });

    ipcRenderer.on('updateMsg', (event, message) => {
        if (message.type === 'success') {
            setText('دانلود ورژن جدید با موفقیت انجام شد')
        }
    })
        
    
    ipcRenderer.on('updateMsg', (event, message) => {
        if (message.type === 'error'){
            setText('مشکلی در بروزرسانی پیش اومده')
        }
    });
    
    ipcRenderer.on('updateMsg', (event, message) => {
        if (message.type === 'progress'){
            setTotal(message.progressObj.total)
            setProgress(message.progressObj.percent)
            setSpeed(message.progressObj.bytesPerSecond)
        }
    });
    


    return (
        <Box>
            <Dialog sx={{ backgroundColor: 'rgba(252, 243, 224, 0.6)', backdropFilter: 'blur(12px) saturate(180%)' }} open={open} keepMounted onClose={() => setOpen(false)}>
            <DialogTitle sx={{display:'flex', justifyContent:"center", alignItems:'center'}}>
                <Typography>
                    بروز رسانی نرم افزار
                </Typography>
            </DialogTitle>
            <DialogContent sx={{width:400, height:150}} dividers>
                <Stack spacing={5}>
                    <Box sx={{mt:2, mb:4, display:'flex', justifyContent:"center", alignItems:'center' }}>
                        <Typography variant="subtitle2">{text}</Typography>
                    </Box>

                    <Box sx={{display:'flex', justifyContent:"center", alignItems:'center'}}>
                        <CircularProgress color="info"/>
                    </Box>
                </Stack>

            </DialogContent>
            </Dialog>
        </Box>
    );
}
 
export default UpdateModal;