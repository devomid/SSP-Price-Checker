import { Stack, Typography } from '@mui/material';

const Tamdid = () => {
    const aboutUpgrade = 'سیتخبتسم هسمیباس'

    return (
        <Stack spacing={2}>
            <Typography variant='h5' textAlign={"left"}>تمدید</Typography>
            <Typography sx={{ whiteSpace: 'pre-line' }} textAlign={"left"}>برای محاسبه تمدید و سنوات یک کد نرم افزار کافیست کد نرم افزار را در فیلد کد مبدا و تاریخ شروع گارانتی را در فیلد مربوطه پر کنید. دقت کنید{'\n'}
                برای وارد کردن تاریخ باید به ترتیب از روز – ماه – سال تاریخ را وارد کنید{'\n'}
                تاریخ را بدون ممیز و علامت خاصی وارد کنید{'\n'}
                روزها و ماه های تک رقمی حتما باید با صفر قبل از عدد روز یا ماه وارد شوند{'\n'}

                تعداد سالهای متوالی تمدید را در فیلد مربوطه پر کنید تا مبلغ تشویقی تمدید متوالی از مبلغ اصلی تمدید کسر گردد
            </Typography>
            <img width='550' height='400' src={require('../assets/HelpImages/Tamdid.png')} />
        </Stack>
    );
}

export default Tamdid;