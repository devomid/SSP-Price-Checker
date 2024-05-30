import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, List, ListItem, ListItemText, Stack, Switch, TextField } from "@mui/material";
import { GeneralState } from "../context/generalContext";
import { useEffect, useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const KhadamatDialog = ({ open, setOpen }) => {
    const khadamat = { 'ریموت برای 30 دقیقه': '4,700,000', 'نصب دورکاری': '57,200,000', 'نصب سینگل': '3,200,000', 'نصب سرور': '8,500,000', 'نصب App': '3,200,000', 'نصب درایور': '3,200,000', 'نصب sql 2008': '3,200,000', 'نصب sql 2016': '4,700,000', 'نصب sql 2019': '920,000', 'نصب ویندوز': '7,500,000', 'نصب یندوز سرور': '11,000,000', 'آموزش اولیه': '3,200,000', 'آموزش تخصصی': '8,500,000', 'مشاوره و آموزش': '9,200,000', 'تعویض سخت افزار': '3,200,000', 'بازگردانی بک آپ-هرشرکت': '1,500,000', 'بازگردانی بکآپ چندشزکتی': '4,700,000', 'طراحی فاکتور + فیش': '9,200,000', 'طراحی بارکد': '8,200,000', 'کارشناسی ساعتی': '8,500,000', 'کارشناس شبکه': '9,200,000', 'بستن حساب': '11000,000', 'نصب مودیان': '4,700,000', 'آموزش مودیان': '9,200,000', 'ثبت نام کامل مودیان': '9,200,000', 'نصب توکن مودیان': '9,200,000', 'دریافت گواهی امضا': '5,000,000', 'ایاب ذهاب': '2,000,000', 'مشاوره بهرامی': '16,000,000', 'کشف رمز': '2,000,000', 'نصب دروید': '7,500,000', 'راه اندازی تبلت برای هر تبلت': '1,000,000', 'اول دوره کردن': '7,500,000' }
    const khadamatTitles = Object.keys(khadamat);
    const khadamatPrices = Object.values(khadamat);

    const [selectedKhadamat, setSelectedKhadamat] = useState([]);
    const [checkedStates, setCheckedStates] = useState(Array(khadamatTitles.length).fill(false));
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredKhadamat, setFilteredKhadamat] = useState([]);
    const [originalIndices, setOriginalIndices] = useState()
    const { setKhadamatPrice } = GeneralState();

    const handleCancel = () => {
        setKhadamatPrice(0)
        setOpen(false);
        setSelectedKhadamat([]);
        setCheckedStates(Array(khadamatTitles.length).fill(false));
    };

    const handleSwitchChange = (index, event) => {
        const selectedKhedmat = khadamatPrices[index];
        const selectedModuleIndex = selectedKhadamat.indexOf(selectedKhedmat);

        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);

        if (event.target.checked) {
            setSelectedKhadamat([...selectedKhadamat, selectedKhedmat]);
        } else {
            setSelectedKhadamat([
                ...selectedKhadamat.slice(0, selectedModuleIndex),
                ...selectedKhadamat.slice(selectedModuleIndex + 1)
            ]);
        };
    };

    const handleAddKits = () => {
        const numbersArray = selectedKhadamat.map(price => parseFloat(price.replace(/,/g, '')));
        const validNumbers = numbersArray.filter(num => !isNaN(num));
        const totalSum = validNumbers.reduce((sum, num) => sum + num, 0);
        setKhadamatPrice(totalSum);
        setOpen(false);
    };

    const handleSearchTermChange = (event) => {
        // Update the search term state
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        // Filter the kits and modulesPrices arrays based on the search term
        const filtereddKhadamatArr = khadamatTitles.filter((khadamatTitle) => khadamatTitle.toLowerCase().includes(searchTerm.toLowerCase()));

        const originalIndicesvalue = filtereddKhadamatArr.map((searchResultsItem) => {
            return khadamatTitles.findIndex((khadamatTitle) => khadamatTitle === searchResultsItem);
        }).filter((originalIndex) => originalIndex !== -1);

        setOriginalIndices(originalIndicesvalue)

        // Set the state of the filteredKitsArr and filteredModulesPrices arrays
        setFilteredKhadamat(filtereddKhadamatArr);
    }, [searchTerm]);

    return (
        <Box>
            <Dialog sx={{ backgroundColor: 'rgba(252, 243, 224, 0.6)', backdropFilter: 'blur(12px) saturate(180%)' }} open={open} keepMounted onClose={() => setOpen(false)} scroll="paper">
                <DialogContent sx={{ width: 500, height: 600 }} dividers>
                    <List sx={{ width: '100%', maxWidth: 500, maxHeight: 400 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 3 }}>
                            <SearchOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField color="primary" sx={{ ml: 2 }} fullWidth onChange={handleSearchTermChange} id="input-with-sx" label="خدمات کارشناسی" variant="standard" style={{ direction: "rtl" }} />
                        </Box>
                        {searchTerm ? (
                            filteredKhadamat.map((filteredKit, index) => {
                                const originalIndex = originalIndices[index];
                                return (
                                    <Box key={filteredKit}>
                                        <ListItem >
                                            <ListItemText sx={{ ml: 10 }} primary={filteredKit} secondary={originalIndex !== -1 ? khadamatPrices[originalIndex] : null} />
                                            <Switch checked={checkedStates[originalIndex]} onChange={(event) => handleSwitchChange(originalIndex, event)} edge="end" />
                                        </ListItem>
                                        <Divider variant="middle" component="li" />
                                    </Box>
                                )
                            })) : (khadamatTitles.map((khedmatTitle, index) =>
                                <Box key={khedmatTitle}>
                                    <ListItem >
                                        <ListItemText sx={{ ml: 5 }} primary={khedmatTitle} secondary={khadamatPrices[index]} />
                                        <Switch checked={checkedStates[index]} onChange={(event) => handleSwitchChange(index, event)} edge="end" />
                                    </ListItem>
                                    <Divider variant="middle" component="li" />
                                </Box>
                            ))}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Stack direction='row' spacing={1} sx={{ width: '100%', m: '10px 5px' }} justifyContent='space-around'>
                        <Button sx={{ width: '45%' }} color="error" variant="outlined" onClick={handleCancel}>انصراف و پاک کردن فرم</Button>
                        <Button sx={{ width: '45%' }} color="primary" variant="outlined" onClick={handleAddKits}>افزودن خدمات کارشناسی</Button>
                    </Stack>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default KhadamatDialog;