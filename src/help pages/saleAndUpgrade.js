import { Stack, Typography } from '@mui/material';

const SaleAndUpgrade = () => {
    const aboutUpgrade = ''

    return (
        <Stack spacing={2}>
            <Typography variant='h5' textAlign={"left"}>فروش و ارتقا</Typography>
            <Typography textAlign={"left"}>بخش آپگرید و فروش برای محاسبه تفاوت ارتفا یک کد به کد بالاتر یا محاسبه قیمت فروش یک کد خاص استفاده می شود.
                در صورتی که قصد محاسبه تفاوت قیمت ارتقا بین دو نرم افزار را دارید باید هر دو فیلد کد مبدا و کد مقصد را پر کنید.

                با خالی گذاشتن فیلد کد مبدا و وارد کردن کد مقصد شما به قیمت نرم افزار کد مبدا دسترسی خواهید داشت و میتوانید با اضافه یا کسر کردن ماژول٬ خدمات و امکانات به کد وارده مجموع ارزش نرم افزار و خدمات و امکانات افزوده شده را مشاهده کنید
            </Typography>
            <img width='550' height='400' src={require('../assets/HelpImages/Upgrade&Sale.png')} />
        </Stack>
    );
}

export default SaleAndUpgrade;