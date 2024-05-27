import Logo from '@/app/assets/images/logoFull.png'
import Image from 'next/image';

type AuthProps = {
    className?: string;
    data: any;
};

const AuthLayout = ({ className, data }: AuthProps) => {
    const classes = `${className || ''}`;
    
    return (
        <>
            <div className="md:grid block grid-cols-5 ">
                <div className="bg-base-content md:h-screen content-center md:py-0 py-10 col-span-2">
                    <Image src={Logo} alt='logo' className='m-auto'/>
                </div>
                <div className="bg-base-100 md:h-screen content-center block md:py-0 py-10 col-span-3">
                    <div className='m-auto w-96'>
                        {data}
                    </div>
                </div>
            </div>
        </>
    );
}   
export default AuthLayout;