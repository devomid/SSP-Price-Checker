import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";

const KarbarEzafeValueErrModal = ({ open, setOpen }) => {
    return (
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Dialog sx={{ backgroundColor: 'rgba(252, 243, 224, 0.6)', backdropFilter: 'blur(12px) saturate(180%)' }} open={open} keepMounted onClose={() => setOpen(false)}>
            <DialogTitle sx={{display:'flex', justifyContent:"center", alignItems:'center'}}>
                <Typography>
                    کاربر اضافه رو چک کردی؟
                </Typography>
            </DialogTitle>
            <DialogContent sx={{width:490, height:180}} dividers>
                <Stack spacing={5}>
                    <Box sx={{ mb:4, display:'flex', justifyContent:"center", alignItems:'center' }}>
                        <Typography sx={{ mt:2}} align="center" variant="subtitle2">کاربر اضافه حتما باید مقدار داشته باشه. اگر کاربر اضافه نداره صفر وارد کن</Typography>
                    </Box>

                    <DialogActions>
                            <Button sx={{ width: '100%', height:50 }} color="info" variant="contained" onClick={() => setOpen(false)}>اوکی</Button>
                </DialogActions>
                </Stack>

            </DialogContent>
            </Dialog>
        </Box>
    );
}
 
export default KarbarEzafeValueErrModal;