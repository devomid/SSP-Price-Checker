import { Box, Chip, Divider, FormControl, Stack, TextField } from "@mui/material";
import { GeneralState } from "../context/generalContext";

const DiscountSection = () => {

    const { setSaleTakhfif, setTamdidTakhfif, setKarbarEzafeTakhfif, setChandSherkatiTakhfif, setTabdilBeGhoflTakhfif, setModulesTakhfif, setBargashtiTakhfif, setKhadamatTakhfif, calc, setCalc } = GeneralState();

    const handleKeyDown = () => {
        setCalc(!calc);
    };


    return (
        <Box sx={{ width: '25%', backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px) saturate(180%)', border: '1px solid rgba(38, 66, 50, 0.5)', mt: '1rem', borderRadius: 5, boxShadow: 3, padding: '1rem', justifyContent: 'center', alignItems: 'center', mb: 1.8 }}>
            {/* <Divider sx={{ mb: 2 }}>
                <Chip label="آپگرید و فروش" size="small" sx={{ '& .MuiChip-label': { fontSize: '11px' } }} color="default" />
            </Divider> */}
            <Stack spacing={1.6}>

                <FormControl>
                    <TextField onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleKeyDown()
                        }
                    }} onChange={(e) => setSaleTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '14px' } }} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)' }} type="text" label="تخفیف فروش " variant="outlined" size="small" />
                </FormControl>

                {/* <Divider sx={{ mt: 12.8, mb: 3 }}>
                <Chip label="تمدید پشتیبانی" size="small" sx={{ '& .MuiChip-label': { fontSize: '11px' } }} />
            </Divider> */}

                <FormControl>
                    <TextField onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleKeyDown()
                        }
                    }} onChange={(e) => setTamdidTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '14px' } }} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)' }} type="text" label="تخفیف تمدید" variant="outlined" size="small" />
                </FormControl>

                {/* <Divider sx={{ mt: 12.8, mb: 2 }}>
                <Chip label="سایر موارد" size="small" sx={{ '& .MuiChip-label': { fontSize: '11px' } }} />
            </Divider> */}

                <FormControl>
                    <TextField onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleKeyDown()
                        }
                    }} onChange={(e) => setKarbarEzafeTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '14px' } }} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)' }} type="text" label="تخفیف کاربر " variant="outlined" size="small" />
                </FormControl>
                {/* <Stack sx={{ mt: 3.5 }} spacing={0.5}>
                <FormControl>
                    <TextField onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleKeyDown()
                        }
                    }} onChange={(e) => setChandSherkatiTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '14px' } }} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)' }} type="text" label="تخفیف چند" variant="outlined" size="small" />
                </FormControl>

                <FormControl>
                    <TextField onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleKeyDown()
                        }
                    }} onChange={(e) => setTabdilBeGhoflTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '14px' } }} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)' }} type="text" label="تخفیف قفل" variant="outlined" size="small" />
                </FormControl>
            </Stack> */}

                {/* <Divider sx={{ mb: 1.3, mt: 1.5 }}>
                <Chip label="ماژول ها و خدمات" size="small" sx={{ '& .MuiChip-label': { fontSize: '11px' } }} />
            </Divider> */}

                <FormControl>
                    <TextField onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleKeyDown()
                        }
                    }} onChange={(e) => setModulesTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '14px' } }} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)' }} type="text" label="تخفیف ماژول" variant="outlined" size="small" />
                </FormControl>
                {/* <FormControl>
                    <TextField onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleKeyDown()
                        }
                    }} onChange={(e) => setBargashtiTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '12px' } }} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)' }} type="text" label="تخفیف برگشتی" variant="outlined" size="small" />
                </FormControl> */}
                <FormControl>
                    <TextField onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleKeyDown()
                        }
                    }} onChange={(e) => setKhadamatTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '14px' } }} sx={{ backgroundColor: 'rgba(252, 243, 224, 0.1)', backdropFilter: 'blur(5px) saturate(180%)' }} type="text" label="تخفیف خدمات" variant="outlined" size="small" />
                </FormControl>
            </Stack>

        </Box>
    );
};

export default DiscountSection;