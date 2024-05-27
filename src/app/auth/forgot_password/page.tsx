import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Typography from "@/app/components/Typography";

export default function Forgot() {
    return (
        <>
            <Typography
                tag="h2"
                size='text-3xl'
                weight='font-semibold'
                color='text-base-content'
                className='block text-left'
            >
                Forgot password
            </Typography>
            <Typography
                tag="h4"
                size='text-base'
                weight='font-normal'
                color='text-neutral-content'
                className='block text-left pt-1 mb-4'
            >
                Dont warry its happen. please enter the email address associated with your account.
            </Typography>
            <Input
                type='email'
                id='emai-id'
                label='Email ID'
                className='w-full'
                placeholder="rahul.m@gmail.com"
            />

            <Button
                variant="btn-primary"
                className='mt-10 px-7'
            >
                verify
            </Button>
            <Typography
                size='text-sm'
                weight='font-semibold'
                color='text-base-content '
                className='block text-left grid content-center mt-4'
            >
                <a href="#">Back to login</a>
            </Typography>
        </>
    );
};