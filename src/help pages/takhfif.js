import { Box, Stack, Typography } from '@mui/material';

const Takhfifat = () => {
    const aboutUpgrade = ' در صورتی که قصد محاسبه ارتقا را دارید کد های مبدا و مقصد را پر کنید و چنانچه هر یک از این کد ها دارای کیت چند شرکتی بودند برای درج در محاسبه تفاوت ارتفا کدهای مورد نظر دکمه چند شرکتی مبدا یا مثصد را بنا روشن کنید. در صورتی که قصد فروش یک کد یا افزودن امکانات یا ماژول یا خدمات به آن را داشتید قسمت کد مبدا را خالی گذاشته و در صورت جدید بودن فروش کلید فروش جدید را روشن و در صورت موجود بودن محصول و تمایل به افزودن امکانات و خدمات و ماژول دکمه فروش جدید را خاموش کنید تا مبلغ قیمت کد مقصد در جمع کل نتیجه جمع نشود';

    return (
        <Stack spacing={2}>
            <Typography variant='h5' textAlign={"left"}>بخش تخفیف ها</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Typography sx={{ ml: 3, mt: 15 }} textAlign={"left"}>تخفیف مربوط به هر بخش از نرم افزار را به صورت درصدی در این قسمت وارد کنید تا مقدار تخفیف داده شده از مبلغ فیلد مربوطه کسر گردد</Typography>
                <img width='550' height='400' src={require('../assets/HelpImages/discount.png')} />
            </Box>
        </Stack>
    );
}

export default Takhfifat;