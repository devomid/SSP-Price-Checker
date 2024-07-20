import { Box, FormControl, Stack, TextField } from "@mui/material";
import { GeneralState } from "../context/generalContext";

const DiscountSection = () => {

    const { setSaleTakhfif, setTamdidTakhfif, setKarbarEzafeTakhfif, setChandSherkatiTakhfif, setTabdilBeGhoflTakhfif, setModulesTakhfif, setBargashtiTakhfif, setKhadamatTakhfif, calc, setCalc } = GeneralState();

    const handleKeyDown = () => {
        setCalc(!calc);
    };


    return (
        <Box sx={{ width: '20%', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px) saturate(180%)', border: '1px solid rgba(38, 66, 50, 0.5)', borderRadius: 5, boxShadow: 3, padding: '1rem 1rem 0.5rem 1rem', justifyContent: 'center', alignItems: 'center', mt: '1rem', mr: 1, ml: 1 }}>

            <Stack sx={{ mb: 5.5 }} spacing={3}>

                <FormControl>
                    <TextField onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleKeyDown()
                        }
                    }} onChange={(e) => setSaleTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '12px' } }} sx={{// Root class for the input field
                        "& .MuiOutlinedInput-root": {
                            color: "#fff",
                            // Class for the border around the input field
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#fff",
                                borderWidth: "0.7px",
                                borderRadius: 3
                            },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-outlined": {
                            color: "rgb(197, 222, 199)",
                        }, backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(5px) saturate(180%)', borderRadius: 3
                    }} type="text" label="تخفیف فروش " variant="outlined" size="small" />
                </FormControl>

                <FormControl >
                    <TextField onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleKeyDown()
                        }
                    }} onChange={(e) => setChandSherkatiTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '10px' } }} sx={{// Root class for the input field
                        "& .MuiOutlinedInput-root": {
                            color: "#fff",
                            // Class for the border around the input field
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#fff",
                                borderWidth: "0.7px",
                                borderRadius: 3
                            },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-outlined": {
                            color: "rgb(197, 222, 199)",
                        }, backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(5px) saturate(180%)', borderRadius: 3
                    }} type="text" label="تخفیف چند شرکتی" variant="outlined" size="small" />
                </FormControl>

            </Stack>

            <FormControl>
                <TextField onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleKeyDown()
                    }
                }} onChange={(e) => setTamdidTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '12px' } }} sx={{// Root class for the input field
                    "& .MuiOutlinedInput-root": {
                        color: "#fff",
                        // Class for the border around the input field
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                            borderWidth: "0.7px",
                            borderRadius: 3
                        },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                        color: "rgb(197, 222, 199)",
                    }, backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(5px) saturate(180%)', borderRadius: 3
                }} type="text" label="تخفیف تمدید" variant="outlined" size="small" />
            </FormControl>

            <FormControl sx={{ mt: 16 }}>
                <TextField onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleKeyDown()
                    }
                }} onChange={(e) => setKarbarEzafeTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '12px' } }} sx={{// Root class for the input field
                    "& .MuiOutlinedInput-root": {
                        color: "#fff",
                        // Class for the border around the input field
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                            borderWidth: "0.7px",
                            borderRadius: 3
                        },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                        color: "rgb(197, 222, 199)",
                    }, backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(5px) saturate(180%)', borderRadius: 3
                }} type="text" label="تخفیف کاربر " variant="outlined" size="small" />
            </FormControl>

            <FormControl sx={{ mt: 16 }}>
                <TextField onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleKeyDown()
                    }
                }} onChange={(e) => setModulesTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '12px' } }} sx={{// Root class for the input field
                    "& .MuiOutlinedInput-root": {
                        color: "#fff",
                        // Class for the border around the input field
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                            borderWidth: "0.7px",
                            borderRadius: 3
                        },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                        color: "rgb(197, 222, 199)",
                    }, backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(5px) saturate(180%)', borderRadius: 3
                }} type="text" label="تخفیف ماژول" variant="outlined" size="small" />
            </FormControl>

            <FormControl sx={{ mt: 5 }}>
                <TextField onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleKeyDown()
                    }
                }} onChange={(e) => setKhadamatTakhfif(e.target.value)} InputLabelProps={{ style: { fontSize: '12px' } }} sx={{// Root class for the input field
                    "& .MuiOutlinedInput-root": {
                        color: "#fff",
                        // Class for the border around the input field
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                            borderWidth: "0.7px",
                            borderRadius: 3
                        },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                        color: "rgb(197, 222, 199)",
                    }, backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(5px) saturate(180%)', borderRadius: 3
                }} type="text" label="تخفیف خدمات" variant="outlined" size="small" />
            </FormControl>

        </Box>
    );
};

export default DiscountSection;