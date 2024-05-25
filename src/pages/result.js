import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemText, ListSubheader, Paper, Slide, Stack, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { GeneralState } from '../context/generalContext'


const ResultsSection = ({ open, setOpen }) => {
    const { originCode, setOriginCode, upgradeDifference, setUpgradeDifference, destCode, setDestCode, originChandSherkati, setOriginChandSherkati, destChandSherkati, setDestChandSherkati, originChandSherkatiPrice, setOriginChandSherkatiPrice, destChandSherkatiPrice, setDestChandSherkatiPrice, tamdidDate, setTamdidDate, tamdidMotevali, setTamdidMotevali, karbaeEzafePrice, setKarbarEzafePrice, chandSherkati, setChandSherkati, tabdilBeGhofl, setTabdilBeGhofl, modules, setModules, bargashti, setBargashti, khadamat, setKhadamat, originPrice, setOriginPrice, destPrice, setDestPrice, tamdidPrice, setTamdidPrice, tashvighiPrice, setTashvighiPrice, motevaliPrice, setMotevaliPrice, chandSherkatiPrice, setChandSherkatiPrice, tabdilBeGhoflPrice, setTabdilBeGhoflPrice, modulesPrice, setModulesPrice, bargashtiPrice, setBargashtiPrice, khadamatPrice, setKhadamatPrice, originAfterTakhfif, setOriginAfterTakhfif, destAfterTakhfif, setDestAfterTakhfif, upgradeAfterTakhfif, setUpgradeAfterTakhfif, tamdidAfterTakhfif, setTamdidAfterTakhfif, karbarEzafeAfterTakhfif, setKarbarEzafeAfterTakhfif, chandSherkatiAfterTakhfif, setChandSherkatiAfterTakhfif, tabdilBeGhoflAfterTakhfif, setTabdilBeGhoflAfterTakhfif, modulesAfterTakhfif, setModulesAfterTakhfif, bargashtiAfterTakhfif, setBargashtiAfterTakhfif, khadamatAfterTakhfif, setKhadamatAfterTakhfif, jameKol, setJameKol, jameKolAfterTakhfif, setJameKolAfterTakhfif,
        originPriceBefore, setOriginPriceBefore,
        destPriceBefore, setDestPriceBefore,
        upgradeDifferenceBefore, setUpgradeDifferenceBefore,
        tamdidPriceBefore, setTamdidPriceBefore,
        tashvighiPriceBefore, setTashvighiPriceBefore,
        motevaliPriceBefore, setMotevaliPriceBefore,
        karbaeEzafePriceBefore, setKarbarEzafePriceBefore,
        chandSherkatiPriceBefore, setChandSherkatiPriceBefore,
        tabdilBeGhoflPriceBefore, setTabdilBeGhoflPriceBefore,
        modulesPriceBefore, setModulesPriceBefore,
        bargashtiPriceBefore, setBargashtiPriceBefore,
        khadamatPriceBefore, setKhadamatPriceBefore,
        jameKolBefore, setJameKolBefore,
        originChandSherkatiPriceBefore, setOriginChandSherkatiPriceBefore,
        destChandSherkatiPriceBefore, setDestChandSherkatiPriceBefore } = GeneralState();

    function createData(name, beforeArzesh, afterArzesh, afterTakhfif) {
        return { name, beforeArzesh, afterArzesh, afterTakhfif };
    };

    const rows = [
        createData('قیمت کد مبدا', Number(originPriceBefore).toLocaleString(), Number(originPrice).toLocaleString(), '-'),
        createData('قیمت چند شرکتی مبدا', Number(originChandSherkatiPriceBefore).toLocaleString(), Number(originChandSherkatiPrice).toLocaleString(), '-'),
        createData('قیمت کد مقصد', Number(destPriceBefore).toLocaleString(), Number(destPrice).toLocaleString(), Number(destAfterTakhfif).toLocaleString()),
        createData('قیمت چند شرکتی مقصد', Number(destChandSherkatiPriceBefore).toLocaleString(), Number(destChandSherkatiPrice).toLocaleString(), '-'),
        createData('مابه التفاوت ارتقا', Number(upgradeDifferenceBefore).toLocaleString(), Number(upgradeDifference).toLocaleString(), Number(upgradeAfterTakhfif).toLocaleString()),
        createData('قیمت تمدید', Number(tamdidPriceBefore).toLocaleString(), Number(tamdidPrice).toLocaleString(), Number(tamdidAfterTakhfif).toLocaleString()),
        createData('قیمت تمدید تشویقی', Number(tashvighiPriceBefore).toLocaleString(), Number(tashvighiPrice).toLocaleString(), '-'),
        createData('تمدید متوالی(کسر از تمدید) ', Number(motevaliPriceBefore).toLocaleString(), Number(motevaliPrice).toLocaleString(), '-'),
        createData('قیمت کاربر اضافه', Number(karbaeEzafePriceBefore).toLocaleString(), Number(karbaeEzafePrice).toLocaleString(), Number(karbarEzafeAfterTakhfif).toLocaleString()),
        createData('قیمت چند شرکتی', Number(chandSherkatiPriceBefore).toLocaleString(), Number(chandSherkatiPrice).toLocaleString(), Number(chandSherkatiAfterTakhfif).toLocaleString()),
        createData('قیمت تبدیل به کارت', Number(tabdilBeGhoflPriceBefore).toLocaleString(), Number(tabdilBeGhoflPrice).toLocaleString(), Number(tabdilBeGhoflAfterTakhfif).toLocaleString()),
        createData('قیمت کیت ها و ماژول ها', Number(modulesPriceBefore).toLocaleString(), Number(modulesPrice).toLocaleString(), Number(modulesAfterTakhfif).toLocaleString()),
        createData('قیمت کیت های برگشتی', Number(bargashtiPriceBefore).toLocaleString(), Number(bargashtiPrice).toLocaleString(), Number(bargashtiAfterTakhfif).toLocaleString()),
        createData('قیمت خدمات کارشناسی', Number(khadamatPriceBefore).toLocaleString(), Number(khadamatPrice).toLocaleString(), Number(khadamatAfterTakhfif).toLocaleString()),
        createData('جمع کل', Number(jameKolBefore).toLocaleString(), Number(jameKol).toLocaleString(), Number(jameKolAfterTakhfif).toLocaleString()),
    ];

    return (
        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px) saturate(180%)', border: '1px solid rgba(38, 66, 50, 0.5)', mt: '1rem', mb: '0.5rem', borderRadius: 5, boxShadow: 3, padding: '1rem' }}>

            <TableContainer dir="rtl" component={Paper}>
                <Table sx={{ width: 510 }} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#4a703b' }}>
                            <TableCell><Typography color='white' variant="body2" >سرفصل خدمت</Typography></TableCell>
                            <TableCell align="center"><Typography color='white' variant="caption" textAlign='center'>قبل از ارزش افزوده</Typography></TableCell>
                            <TableCell align="center"><Typography color='white' variant="caption" textAlign='center'>بعد از ارزش افزوده</Typography></TableCell>
                            <TableCell align="center"><Typography color='white' variant="caption" textAlign='center'>بعد از تخفیف</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={row.name}
                                className={index % 2 === 0 ? 'even-row' : 'odd-row'}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Typography variant="caption" >{row.name}</Typography>
                                </TableCell>
                                <TableCell align="center"><Typography variant="caption" >{row.beforeArzesh}</Typography></TableCell>
                                <TableCell align="center"><Typography variant="caption" >{row.afterArzesh}</Typography></TableCell>
                                <TableCell align="center"><Typography variant="caption" >{row.afterTakhfif}</Typography></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ResultsSection;