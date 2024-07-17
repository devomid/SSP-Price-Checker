import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { GeneralState } from '../context/generalContext';


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
        destChandSherkatiPriceBefore, setDestChandSherkatiPriceBefore,
        printRes, setPrintRes,
        saleTakhfif, setSaleTakhfif,
        tamdidTakhfif, setTamdidTakhfif,
        karbarEzafeTakhfif, setKarbarEzafeTakhfif,
        chandSherkatiTakhfif, setChandSherkatiTakhfif,
        tabdilBeGhoflTakhfif, setTabdilBeGhoflTakhfif,
        modulesTakhfif, setModulesTakhfif,
        bargashtiTakhfif, setBargashtiTakhfif,
        khadamatTakhfif, setKhadamatTakhfif,
        saleTakhfifAmount, setSaleTakhfifAmount,
        upgradeTakhfifAmount, setUpgradeTakhfifAmount,
        destChandSherkatiTakhfifAmount, setDestChandSherkatiTakhfifAmount,
        tamdidTakhfifAmount, setTamdidTakhfifAmount,
        karbarEzafeTakhfifAmount, setKarbarEzafeTakhfifAmount,
        modulesTakhfifAmount, setModulesTakhfifAmount,
        khadamatTakhfifAmount, setKhadamatTakhfifAmount,
        jameKolaTakhfifAmount, setJameKolTakhfifAmount } = GeneralState();

    const printResults = () => {
        window.print()
        setPrintRes(false)
    }

    function createData(name, beforeArzesh, afterArzesh, takhfifAmount, afterTakhfif) {
        return { name, beforeArzesh, afterArzesh, takhfifAmount, afterTakhfif };
    };

    useEffect(() => {
        if (printRes) {
            printResults()
        }
    }, [printRes])

    const rows = [
        createData('قیمت کد مبدا', Math.floor(Number(originPriceBefore)).toLocaleString(), Number(originPrice).toLocaleString(), '-', '-'),
        createData('قیمت چند شرکتی مبدا', Math.floor(Number(originChandSherkatiPriceBefore)).toLocaleString(), Number(originChandSherkatiPrice).toLocaleString(), '-', '-'),
        createData('قیمت کد مقصد', Math.floor(Number(destPriceBefore)).toLocaleString(), Number(destPrice).toLocaleString(), Number(saleTakhfifAmount).toLocaleString(), Number(destAfterTakhfif).toLocaleString()),
        createData('قیمت چند شرکتی مقصد', Math.floor(Number(destChandSherkatiPriceBefore)).toLocaleString(), Number(destChandSherkatiPrice).toLocaleString(), Number(destChandSherkatiTakhfifAmount).toLocaleString(), Number(chandSherkatiAfterTakhfif).toLocaleString()),
        createData('مابه التفاوت ارتقا', Math.floor(Number(upgradeDifferenceBefore)).toLocaleString(), Number(upgradeDifference).toLocaleString(), Number(upgradeTakhfifAmount).toLocaleString(), Number(upgradeAfterTakhfif).toLocaleString()),
        createData('قیمت تمدید', Math.floor(Number(tamdidPriceBefore)).toLocaleString(), Number(tamdidPrice).toLocaleString(), Number(tamdidTakhfifAmount).toLocaleString(), Number(tamdidAfterTakhfif).toLocaleString()),
        // createData('قیمت تمدید تشویقی', Number(tashvighiPriceBefore).toLocaleString(), Number(tashvighiPrice).toLocaleString(), '-'),
        createData('تمدید متوالی(کسر از تمدید) ', Math.floor(Number(motevaliPriceBefore)).toLocaleString(), Number(motevaliPrice).toLocaleString(), '-', '-'),
        createData('قیمت کاربر اضافه', Math.floor(Number(karbaeEzafePriceBefore)).toLocaleString(), Number(karbaeEzafePrice).toLocaleString(), Number(karbarEzafeTakhfifAmount).toLocaleString(), Number(karbarEzafeAfterTakhfif).toLocaleString()),
        // createData('قیمت چند شرکتی', Number(chandSherkatiPriceBefore).toLocaleString(), Number(chandSherkatiPrice).toLocaleString(), Number(chandSherkatiAfterTakhfif).toLocaleString()),
        createData('قیمت تبدیل قفل به کارت', Math.floor(Number(tabdilBeGhoflPriceBefore)).toLocaleString(), Number(tabdilBeGhoflPrice).toLocaleString(), '-', '-'),
        createData('قیمت کیت ها و ماژول ها', Math.floor(Number(modulesPriceBefore)).toLocaleString(), Number(modulesPrice).toLocaleString(), Number(modulesTakhfifAmount).toLocaleString(), Number(modulesAfterTakhfif).toLocaleString()),
        createData('قیمت کیت های برگشتی', Math.floor(Number(bargashtiPriceBefore)).toLocaleString(), Number(bargashtiPrice).toLocaleString(), '-', '-'),
        createData('قیمت خدمات کارشناسی', Math.floor(Number(khadamatPriceBefore)).toLocaleString(), Number(khadamatPrice).toLocaleString(), Number(khadamatTakhfifAmount).toLocaleString(), Number(khadamatAfterTakhfif).toLocaleString()),
        createData('جمع کل', Math.floor(Number(jameKolBefore)).toLocaleString(), Number(jameKol).toLocaleString(), Number(jameKolaTakhfifAmount).toLocaleString(), Number(jameKolAfterTakhfif).toLocaleString()),
    ];

    return (
        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px) saturate(180%)', border: '1px solid rgba(38, 66, 50, 0.5)', mt: '1rem', borderRadius: 5, boxShadow: 3, padding: '1rem' }}>

            <TableContainer dir="rtl" component={Paper}>
                <Table sx={{ width: 620 }} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#4a703b' }}>
                            <TableCell><Typography color='white' variant="body2" >سرفصل خدمت</Typography></TableCell>
                            <TableCell align="center"><Typography color='white' variant="caption" textAlign='center'>قیمت مصوب</Typography></TableCell>
                            <TableCell align="center"><Typography color='white' variant="caption" textAlign='center'>فی فروش</Typography></TableCell>
                            <TableCell align="center"><Typography color='white' variant="caption" textAlign='center'>مبلغ تخفیف</Typography></TableCell>
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
                                <TableCell align="center"><Typography variant="caption" >{row.afterArzesh}</Typography></TableCell>
                                <TableCell align="center"><Typography variant="caption" >{row.beforeArzesh}</Typography></TableCell>
                                <TableCell align="center"><Typography variant="caption" >{row.takhfifAmount}</Typography></TableCell>
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