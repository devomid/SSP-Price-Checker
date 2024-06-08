import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, Button, Dialog, DialogActions, DialogContent, Divider, List, ListItem, ListItemText, Stack, Switch, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GeneralState } from "../context/generalContext";


const BargashtiDialog = ({ open, setOpen }) => {

    const kits = ['انتقال کالا بين گروه ها', 'بدهكاران بر اساس تاريخ فاكتور فروش', 'بدهكاران هر روز ', 'تاريخ وصول چک هاي خرجي', 'تخفيف سطري', 'ترازوي ديجيتالي', 'توليد اتوماتيك بر اساس فرمول توليد', 'چند ارزي جدید', 'حراجي و تخفيفات پلکانی', 'خدمات برحسب درصدي ازمبلغ كل فاكتور', 'سرشكن هزينه درقيمت خريد', 'سرفصل آزاد', 'كيت درج كارمزد', 'گزارش ريز پرداختي هاي مشتريان', 'گزارش عملكرد كاربران', 'گزارشات آنلاين هلو 1 ماهه ', 'گزارشات آنلاين هلو 3 ماهه', 'گزارشات آنلاين هلو 6 ماهه', '...پرداخت به...دريافت از', '...مغايرت بانكي و', 'ادغام اسناد تجميعي', 'اقساط وگزارشات مربوطه', 'انتخاب سرفصل در فاكتور ضايعات', 'انتخاب عكس هر كالا', 'بسته شغلي پيامک', 'پرينت چك', 'پرينت حواله پخش', 'پرينت حواله و رسيد انباردر ثبت فاكتور', 'پورسانت درصدي از سود فروش + واسطه', 'پورسانت سطري', 'تاريخ ميلادي به جاي هجري شمسي', 'تبديل اسنادموقت به دائم وبرعكس', 'تجزيه', 'تسويه فاكتوربه فاكتور', 'توضيحات چند سطري هر سطر فاكتور ', 'توليد فرموله', 'تيپ قيمت', 'ثبت سنددرپيش فاكتور', 'ثبت سندمشابه وسندمعكوس', 'ثبت قيمت همكاران ومشتريان', 'ثبت كرايه مشتري درفاكتور', 'ثبت ليستي چكها', 'ثبت هزينه در فاكتور خريد و فروش', 'چاپ باركد', 'چك ضمانتي', 'حداقل و حداكثر مبلغ جهت هر كالا ', 'حواله بين انبار', 'خروجي متن', 'ادغام اسناد', 'خلاصه فاكتور ', 'دسته چك ', 'دو واحدي انبار', 'راس چك', 'راس فاكتور', 'سطح دسترسي', 'سفارش ليستي كالاهاو...وتبديل به فاكتور', 'اعشاری شناور', 'سود و ترازنامه بر اساس قيمت دلخواه هر كالا', 'ش دوم فاكتور/ سند', 'شماره سريال', 'طراحي فاكتور', 'فاكتور اشانتيون', 'فروش نقدي', 'في فروش برحسب درصدي ازفي خريد', 'کاربر اضافه سفارش گيري رستوران', 'کاربر اضافه سفارش گيري پخش', 'كاردكس ريالي كالا', 'كالر آيدي', 'گزارش عملكرد كالا', 'گزارش كالاهاي فروش نرفته', 'گزارشات تجميعي', 'ليست بدهكاران از تاريخ خاص ', 'ليست سياه', 'مركز هزينه- درآمد', 'معين اشخاص همراه باريز كالا', 'معين كالا ', 'منطقه بندي طرف حسابها', 'واسطه', 'هزينه حمل', '10 شركتي', '20 شرکتي', '30 شرکتي', 'کاربر اضافه شبکه هلو-پنل مشاغل', 'كاربر اضافه شبكه هلو', 'بارکدخوان آفلاین', 'Tag انبارگرداني', 'تعيين حداكثر مبلغ و تعداد  چك در هر ماه ', 'تنظيم ليست قيمتها', 'توضيحات پيش فرض', 'عدم ثبت سند و فاكتور / فقط پرينت فاكتور', 'عدم نمايش معين يك منطقه خاص', 'كنترل كدفروشنده زمان صدورفاكتور', 'گزارش فاكتور اشخاص']
    const modulesPrices = ['10,100,000', '3,600,000', '3,600,000', '3,600,000', '3,600,000', '4,600,000', '15,200,000', '57,600,000', '15,200,000', '3,600,000', '4,600,000', '10,100,000', '4,600,000', '5,100,000', '15,200,000', '1,600,000', '3,600,000', '8,100,000', '3,600,000', '4,600,000', '5,100,000', '8,600,000', '6,600,000', '3,600,000', '30,300,000', '3,600,000', '4,600,000', '4,600,000', '6,100,000', '7,100,000', '5,100,000', '3,600,000', '7,100,000', '5,100,000', '3,600,000', '10,100,000', '4,600,000', '3,600,000', '5,100,000', '4,600,000', '3,600,000', '3,600,000', '6,100,000', '5,100,000', '3,600,000', '3,600,000', '5,100,000', '6,100,000', '5,100,000', '7,100,000', '3,600,000', '4,600,000', '3,600,000', '3,600,000', '5,100,000', '3,600,000', '3,600,000', '5,100,000', '3,600,000', '3,600,000', '5,100,000', '3,600,000', '4,600,000', '7,100,000', '4,600,000', '13,200,000', '3,600,000', '4,600,000', '7,600,000', '3,600,000', '20,200,000', '3,600,000', '3,600,000', '4,600,000', '4,600,000', '3,600,000', '3,600,000', '8,100,000', '3,600,000', '50% قیمت', 'هر ۱۰ شرکت ۵۰٪ قیمت', 'هر ۱۰ شرکت ۵۰٪ قیمت', '10% قیمت', '10% قیمت', '15,200,000', '3,600,000', '3,600,000', '5,100,000', '3,600,000', '3,600,000', '7,100,000', '3,600,000', '3,600,000']

    const [selectedBargashti, setSelectedBargashti] = useState([]);
    const [checkedStates, setCheckedStates] = useState(Array(kits.length).fill(false));
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredKits, setFilteredKits] = useState([]);
    const [originalIndices, setOriginalIndices] = useState()
    const { setBargashtiPrice } = GeneralState();

    const handleCancel = () => {
        setBargashtiPrice(0)
        setOpen(false);
        setSelectedBargashti([]);
        setCheckedStates(Array(kits.length).fill(false));
    };

    const handleSwitchChange = (index, event) => {
        const selectedModule = modulesPrices[index];
        const selectedModuleIndex = selectedBargashti.indexOf(selectedModule);

        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);

        if (event.target.checked) {
            setSelectedBargashti([...selectedBargashti, selectedModule]);
        } else {
            setSelectedBargashti([
                ...selectedBargashti.slice(0, selectedModuleIndex),
                ...selectedBargashti.slice(selectedModuleIndex + 1)
            ]);
        };
    };

    const handleAddKits = () => {
        const numbersArray = selectedBargashti
            .filter(price => typeof price === 'string')
            .map(price => parseFloat(price.replace(/,/g, '')));
        const validNumbers = numbersArray.filter(num => !isNaN(num));
        const totalSum = validNumbers.reduce((sum, num) => sum + num, 0);
        setBargashtiPrice(totalSum);
        setOpen(false);
    };

    const handleSearchTermChange = (event) => {
        // Update the search term state
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        // Filter the kits and modulesPrices arrays based on the search term
        const filteredKitsArr = kits.filter((kit) => kit.toLowerCase().includes(searchTerm.toLowerCase()));

        const originalIndicesvalue = filteredKitsArr.map((searchResultsItem) => {
            return kits.findIndex((kit) => kit === searchResultsItem);
        }).filter((originalIndex) => originalIndex !== -1);

        setOriginalIndices(originalIndicesvalue)

        // Set the state of the filteredKitsArr and filteredModulesPrices arrays
        setFilteredKits(filteredKitsArr);
    }, [searchTerm]);



    return (
        <Box>
            <Dialog open={open} keepMounted onClose={() => setOpen(false)} scroll="paper">
                <DialogContent sx={{ height: 78, width: 500, backgroundColor: 'white' }}>
                    <Box sx={{ width: '52vh', display: 'flex', alignItems: 'flex-end', position: 'fixed' }}>
                        <SearchOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField color="primary" sx={{ ml: 2 }} fullWidth onChange={handleSearchTermChange} id="input-with-sx" label="کیت ها و ماژول های برگشتی" variant="standard" style={{ direction: "rtl" }} />
                    </Box>
                </DialogContent>

                <DialogContent sx={{ width: 500, height: 600 }} dividers>

                    <List sx={{ width: '100%', maxWidth: 500, maxHeight: 400 }}>
                        <Box>
                            {searchTerm ? (
                                filteredKits.map((filteredKit, index) => {
                                    const originalIndex = originalIndices[index];
                                    return (
                                        <Box key={filteredKit}>
                                            <ListItem >
                                                <ListItemText sx={{ ml: 10 }} primary={filteredKit} secondary={originalIndex !== -1 ? modulesPrices[originalIndex] : null} />
                                                <Switch checked={checkedStates[originalIndex]} onChange={(event) => handleSwitchChange(originalIndex, event)} edge="end" />
                                            </ListItem>
                                            <Divider variant="middle" component="li" />
                                        </Box>
                                    )
                                })) : (
                                kits.map((kit, index) =>
                                    <Box key={kit}>
                                        <ListItem >
                                            <ListItemText sx={{ ml: 10 }} primary={kit} secondary={modulesPrices[index]} />
                                            <Switch checked={checkedStates[index]} onChange={(event) => handleSwitchChange(index, event)} edge="end" />
                                        </ListItem>
                                        <Divider variant="middle" component="li" />
                                    </Box>
                                ))}
                        </Box>

                    </List>
                </DialogContent>
                <DialogActions>
                    <Stack direction='row' spacing={1} sx={{ width: '100%', m: '10px 5px' }} justifyContent='space-around'>
                        <Button sx={{ width: '45%' }} color="error" variant="outlined" onClick={handleCancel}>انصراف و پاک کردن فرم</Button>
                        <Button sx={{ width: '45%' }} color="primary" variant="outlined" onClick={handleAddKits}>افزودن کیت و ماژول برگشتی</Button>
                    </Stack>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default BargashtiDialog;
