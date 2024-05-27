import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Typography from "@/app/components/Typography";

export default function Otp() {
    return (
        <>
            <div className="max-w-268 m-auto">
                <Typography
                    tag="h2"
                    size='text-3xl'
                    weight='font-semibold'
                    color='text-base-content'
                    className='block text-left'
                >
                    OTP Verification
                </Typography>
                <Typography
                    tag="h4"
                    size='text-base'
                    weight='font-normal'
                    color='text-neutral-content'
                    className='block text-left pt-1 mb-4'
                >
                    Please enter verification number sent to your email
                </Typography>
                <div className="flex gap-4">
                    <Input
                        type='text'
                        id="otp"
                        className='otp-input'
                    />
                    <Input
                        type='text'
                        id="otp"
                        className='otp-input'
                    />
                    <Input
                        type='text'
                        id="otp"
                        className='otp-input'
                    />
                    <Input
                        type='text'
                        id="otp"
                        className='otp-input'
                    />
                </div>

                <div className='gap-4 flex justify-between  pt-4'>
                    <Typography
                        size='text-sm'
                        weight='font-normal'
                        color='text-base-300 '
                        className='block text-start grid content-center '
                    >
                        <a href="#">Don’t received OTP </a>
                    </Typography>
                    <Typography
                        size='text-sm'
                        weight='font-semibold'
                        color='text-base-content '
                        className='block text-end grid content-center '
                    >
                        <a href="#">Resend OTP</a>
                    </Typography>
                </div>
                <Button
                    variant="btn-primary"
                    className='mt-10 px-7'
                >
                    verify
                </Button>
            </div>
        </>
    );
};