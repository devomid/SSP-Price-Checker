import { Stack, Typography } from '@mui/material';

const UpgradeChandSherkati = () => {

    return (
        <Stack spacing={2}>
            <Typography variant='h5' textAlign={"left"}>چند شرکتی مبدا و مقصد در ارتقا</Typography>
            <Typography textAlign={"left"}>در صورتی که هر یک از کدهای مبدا یا مقصد کیت فعال چند شرکتی داشته باشند دکمه چند شرکتی مربوط به کد مرتبط را روشن کنید تا محاسبه تفاوت قیمت ارتقا با احتساب چند شرکتی مبدا یا مقصد به درستی انجام شود. در صورت روشن بودن دکمه چند شرکتی٬ مبلغ چند شرکتی کد مربوطه به قیمت آن کد اضافه خواهد شد.</Typography>
            <img width='550' height='400' src={require('../assets/HelpImages/upgradeChandsherkati.png')} />
        </Stack>
    );
}

export default UpgradeChandSherkati;