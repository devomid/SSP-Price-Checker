import { Stack, Typography } from '@mui/material';

const Sayer = () => {
    const aboutUpgrade = 'تنسی سیبهاسی سحهی سیخ سیلخسی '

    return (
        <Stack spacing={2}>
            <Typography variant='h5' textAlign={"left"}>سایر موارد</Typography>
            <Typography textAlign={"left"}>کاربر اضافه فقط و فقط قابل اضافه شدن به نرم افزار های شبکه میباشد و با وارد کردن هر تعداد کاربر اضافه مورد نیاز مبلغی محاسبه و به جمع کل اضافه خواهد شد.
                با فعال کردن گزینه چند شرکتی و یا تبدیل به کارت مبالغ ارایه این خدمت ها نیز به جمع کل اضافه خواهد شد
            </Typography>
            <img width='550' height='400' src={require('../assets/HelpImages/sayer.png')} />
        </Stack>
    );
}

export default Sayer;