import { createContext, useContext, useState } from 'react';

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
    const [originCode, setOriginCode] = useState('');
    const [destCode, setDestCode] = useState('');
    const [originChandSherkati, setOriginChandSherkati] = useState(false);
    const [destChandSherkati, setDestChandSherkati] = useState(false);
    const [tamdidDate, setTamdidDate] = useState('');
    const [tamdidMotevali, setTamdidMotevali] = useState('');
    const [chandSherkati, setChandSherkati] = useState(false);
    const [tabdilBeGhofl, setTabdilBeGhofl] = useState(false);
    const [modules, setModules] = useState(null);
    const [bargashti, setBargashti] = useState(null);
    const [khadamat, setKhadamat] = useState(null);

    const [saleTakhfif, setSaleTakhfif] = useState(0);
    const [tamdidTakhfif, setTamdidTakhfif] = useState(0);
    const [karbarEzafeTakhfif, setKarbarEzafeTakhfif] = useState(0);
    const [chandSherkatiTakhfif, setChandSherkatiTakhfif] = useState(0);
    const [tabdilBeGhoflTakhfif, setTabdilBeGhoflTakhfif] = useState(0);
    const [modulesTakhfif, setModulesTakhfif] = useState(0);
    const [bargashtiTakhfif, setBargashtiTakhfif] = useState(0);
    const [khadamatTakhfif, setKhadamatTakhfif] = useState(0);

    const [saleTakhfifAmount, setSaleTakhfifAmount] = useState(0);
    const [upgradeTakhfifAmount, setUpgradeTakhfifAmount] = useState(0);
    const [destChandSherkatiTakhfifAmount, setDestChandSherkatiTakhfifAmount] = useState(0);
    const [tamdidTakhfifAmount, setTamdidTakhfifAmount] = useState(0);
    const [karbarEzafeTakhfifAmount, setKarbarEzafeTakhfifAmount] = useState(0);
    const [modulesTakhfifAmount, setModulesTakhfifAmount] = useState(0);
    const [khadamatTakhfifAmount, setKhadamatTakhfifAmount] = useState(0);
    const [jameKolaTakhfifAmount, setJameKolTakhfifAmount] = useState(0);

    const [originPrice, setOriginPrice] = useState(null);
    const [destPrice, setDestPrice] = useState(null);
    const [originChandSherkatiPrice, setOriginChandSherkatiPrice] = useState(null);
    const [destChandSherkatiPrice, setDestChandSherkatiPrice] = useState(null);
    const [upgradeDifference, setUpgradeDifference] = useState(0);
    const [tamdidPrice, setTamdidPrice] = useState(0);
    const [tashvighiPrice, setTashvighiPrice] = useState(0);
    const [motevaliPrice, setMotevaliPrice] = useState(0);
    const [karbaeEzafePrice, setKarbarEzafePrice] = useState(0);
    const [chandSherkatiPrice, setChandSherkatiPrice] = useState(0);
    const [tabdilBeGhoflPrice, setTabdilBeGhoflPrice] = useState(0);
    const [modulesPrice, setModulesPrice] = useState(0);
    const [bargashtiPrice, setBargashtiPrice] = useState(0);
    const [khadamatPrice, setKhadamatPrice] = useState(0);
    const [jameKol, setJameKol] = useState(0);

    const [originPriceBefore, setOriginPriceBefore] = useState(0);
    const [destPriceBefore, setDestPriceBefore] = useState(0);
    const [originChandSherkatiPriceBefore, setOriginChandSherkatiPriceBefore] = useState(null);
    const [destChandSherkatiPriceBefore, setDestChandSherkatiPriceBefore] = useState(null);
    const [upgradeDifferenceBefore, setUpgradeDifferenceBefore] = useState(0);
    const [tamdidPriceBefore, setTamdidPriceBefore] = useState(0);
    const [tashvighiPriceBefore, setTashvighiPriceBefore] = useState(0);
    const [motevaliPriceBefore, setMotevaliPriceBefore] = useState(0);
    const [karbaeEzafePriceBefore, setKarbarEzafePriceBefore] = useState(0);
    const [chandSherkatiPriceBefore, setChandSherkatiPriceBefore] = useState(0);
    const [tabdilBeGhoflPriceBefore, setTabdilBeGhoflPriceBefore] = useState(0);
    const [modulesPriceBefore, setModulesPriceBefore] = useState(0);
    const [bargashtiPriceBefore, setBargashtiPriceBefore] = useState(0);
    const [khadamatPriceBefore, setKhadamatPriceBefore] = useState(0);
    const [jameKolBefore, setJameKolBefore] = useState(0);

    const [resultsOpen, setResultsOpen] = useState(false);

    const [originAfterTakhfif, setOriginAfterTakhfif] = useState(0);
    const [destAfterTakhfif, setDestAfterTakhfif] = useState(0);
    const [upgradeAfterTakhfif, setUpgradeAfterTakhfif] = useState(0);
    const [tamdidAfterTakhfif, setTamdidAfterTakhfif] = useState(0);
    const [karbarEzafeAfterTakhfif, setKarbarEzafeAfterTakhfif] = useState(0);
    const [chandSherkatiAfterTakhfif, setChandSherkatiAfterTakhfif] = useState(0);
    const [tabdilBeGhoflAfterTakhfif, setTabdilBeGhoflAfterTakhfif] = useState(0);
    const [modulesAfterTakhfif, setModulesAfterTakhfif] = useState(0);
    const [bargashtiAfterTakhfif, setBargashtiAfterTakhfif] = useState(0);
    const [khadamatAfterTakhfif, setKhadamatAfterTakhfif] = useState(0);
    const [jameKolAfterTakhfif, setJameKolAfterTakhfif] = useState(0);

    const [originAfterTakhfifErr, setOriginAfterTakhfifErr] = useState(false);
    const [destAfterTakhfifErr, setDestAfterTakhfifErr] = useState(false);
    const [upgradeAfterTakhfifErr, setUpgradeAfterTakhfifErr] = useState(false);
    const [tamdidAfterTakhfifErr, setTamdidAfterTakhfifErr] = useState(false);
    const [karbarEzafeAfterTakhfifErr, setKarbarEzafeAfterTakhfifErr] = useState(false);
    const [chandSherkatiAfterTakhfifErr, setChandSherkatiAfterTakhfifErr] = useState(false);
    const [tabdilBeGhoflAfterTakhfifErr, setTabdilBeGhoflAfterTakhfifErr] = useState(false);
    const [modulesAfterTakhfifErr, setModulesAfterTakhfifErr] = useState(false);
    const [bargashtiAfterTakhfifErr, setBargashtiAfterTakhfifErr] = useState(false);
    const [khadamatAfterTakhfifErr, setKhadamatAfterTakhfifErr] = useState(false);

    const [calc, setCalc] = useState(false);
    const [resetState, setResetState] = useState(false);

    const [printRes, setPrintRes] = useState(false);

    return (
        <GeneralContext.Provider value={{
            originCode, setOriginCode,
            destCode, setDestCode,
            upgradeDifference, setUpgradeDifference,
            originChandSherkati, setOriginChandSherkati,
            destChandSherkati, setDestChandSherkati,
            originChandSherkatiPrice, setOriginChandSherkatiPrice,
            destChandSherkatiPrice, setDestChandSherkatiPrice,
            tamdidDate, setTamdidDate,
            tamdidMotevali, setTamdidMotevali,
            karbaeEzafePrice, setKarbarEzafePrice,
            chandSherkati, setChandSherkati,
            tabdilBeGhofl, setTabdilBeGhofl,
            modules, setModules,
            bargashti, setBargashti,
            khadamat, setKhadamat,
            saleTakhfif, setSaleTakhfif,
            tamdidTakhfif, setTamdidTakhfif,
            karbarEzafeTakhfif, setKarbarEzafeTakhfif,
            chandSherkatiTakhfif, setChandSherkatiTakhfif,
            tabdilBeGhoflTakhfif, setTabdilBeGhoflTakhfif,
            modulesTakhfif, setModulesTakhfif,
            bargashtiTakhfif, setBargashtiTakhfif,
            khadamatTakhfif, setKhadamatTakhfif,
            originPrice, setOriginPrice,
            destPrice, setDestPrice,
            tamdidPrice, setTamdidPrice,
            tashvighiPrice, setTashvighiPrice,
            motevaliPrice, setMotevaliPrice,
            chandSherkatiPrice, setChandSherkatiPrice,
            tabdilBeGhoflPrice, setTabdilBeGhoflPrice,
            modulesPrice, setModulesPrice,
            bargashtiPrice, setBargashtiPrice,
            khadamatPrice, setKhadamatPrice,
            resultsOpen, setResultsOpen,
            originAfterTakhfif, setOriginAfterTakhfif,
            destAfterTakhfif, setDestAfterTakhfif,
            upgradeAfterTakhfif, setUpgradeAfterTakhfif,
            tamdidAfterTakhfif, setTamdidAfterTakhfif,
            karbarEzafeAfterTakhfif, setKarbarEzafeAfterTakhfif,
            chandSherkatiAfterTakhfif, setChandSherkatiAfterTakhfif,
            tabdilBeGhoflAfterTakhfif, setTabdilBeGhoflAfterTakhfif,
            modulesAfterTakhfif, setModulesAfterTakhfif,
            bargashtiAfterTakhfif, setBargashtiAfterTakhfif,
            khadamatAfterTakhfif, setKhadamatAfterTakhfif,
            originAfterTakhfifErr, setOriginAfterTakhfifErr,
            destAfterTakhfifErr, setDestAfterTakhfifErr,
            upgradeAfterTakhfifErr, setUpgradeAfterTakhfifErr,
            tamdidAfterTakhfifErr, setTamdidAfterTakhfifErr,
            karbarEzafeAfterTakhfifErr, setKarbarEzafeAfterTakhfifErr,
            chandSherkatiAfterTakhfifErr, setChandSherkatiAfterTakhfifErr,
            tabdilBeGhoflAfterTakhfifErr, setTabdilBeGhoflAfterTakhfifErr,
            modulesAfterTakhfifErr, setModulesAfterTakhfifErr,
            bargashtiAfterTakhfifErr, setBargashtiAfterTakhfifErr,
            khadamatAfterTakhfifErr, setKhadamatAfterTakhfifErr,
            jameKol, setJameKol,
            jameKolAfterTakhfif, setJameKolAfterTakhfif,
            calc, setCalc,
            resetState, setResetState,
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
            saleTakhfifAmount, setSaleTakhfifAmount,
            upgradeTakhfifAmount, setUpgradeTakhfifAmount,
            destChandSherkatiTakhfifAmount, setDestChandSherkatiTakhfifAmount,
            tamdidTakhfifAmount, setTamdidTakhfifAmount,
            karbarEzafeTakhfifAmount, setKarbarEzafeTakhfifAmount,
            modulesTakhfifAmount, setModulesTakhfifAmount,
            khadamatTakhfifAmount, setKhadamatTakhfifAmount,
            jameKolaTakhfifAmount, setJameKolTakhfifAmount
        }}>
            {children}
        </GeneralContext.Provider>
    )
};

export const GeneralState = () => {
    return useContext(GeneralContext);
};

export default GeneralProvider;
