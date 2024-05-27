import Link from "next/link";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import InputChecks from "@/app/components/Input/InputChecks";
import Typography from "@/app/components/Typography";

export default function Login() {
    return (
        <>
            <Typography 
                tag="h2"
                size='text-3xl'
                weight='font-semibold'
                color='text-base-content'
                className='block text-left'
            >
                Login into Paricott
            </Typography>
            <Typography 
                tag="h4"
                size='text-base'
                weight='font-normal'
                color='text-neutral-content'
                className='block text-left pt-1 mb-4'
            >
                Enter your login details below.
            </Typography>
            <Input 
                type='text'
                id='username'
                label='Username'
                className='mb-4 w-full'
            />
            <Input 
                type='password'
                id='password'
                label='Password'
                className='w-full'
            />
            <div className='grid grid-cols-2 gap-4 place-content-between content-center pt-4'>
                <InputChecks
                    type="checkbox"
                    id="remember"
                    label="Remember me"
                />
                <Typography 
                    size='text-sm'
                    weight='font-semibold'
                    color='text-base-content '
                    className='block text-end grid content-center '
                >
                    <a href="#">Forgot your password?</a>
                </Typography>
            </div>
            <Button
                variant="btn-primary"
                className='mt-10 px-7'
            >
                SIGN IN
            </Button>
        </>
  );
};