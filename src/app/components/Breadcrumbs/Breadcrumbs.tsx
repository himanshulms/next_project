import Image from 'next/image';
import Button from '@/app/components/Button';
import Typography from '@/app/components/Typography';
import './breadcrumbs.scss'
import BackIcon from '@/app/assets/images/svg/backAngle.svg'

type BreadcrumbsProps = {
    className?: string; 
    title?: string; 
    btnPrimaryLabel?: string;
    btnSecondaryLabel?: string;
};
const Breadcrumbs = ({ className, title, btnPrimaryLabel, btnSecondaryLabel }: BreadcrumbsProps) => {
    const classes = `${className || ''}`;
    return (
        <>  
            <div className={`${classes} grid place-content-between grid-cols-1 md:grid-cols-2 gap-4 `}>

                <div className='flex items-center justify-left gap-2'>
                    <Image src={BackIcon} alt="back" />
                    <Typography
                        tag="h1"
                        className=""
                        size="text-3xl"
                        weight="font-semibold"
                    >
                        {title}
                    </Typography>
                </div>
                
                {/* if button primary available */}
                { btnPrimaryLabel && (
                    <div className='flex md:justify-end gap-4'>

                        {/* if button secondary available */}
                        {
                            btnSecondaryLabel && (

                            <Button
                                variant="btn-secondary"
                                className='sm:min-w-36 min-w-28 px-0'
                                size='btn-sm'
                            >
                                {btnSecondaryLabel}
                            </Button>
                        )}

                        <Button
                            variant="btn-primary"
                            size='btn-sm'
                            className='sm:min-w-36 min-w-28 px-0'
                        >
                            {btnPrimaryLabel}
                        </Button>

                    </div>
                )}
                            
            </div>
        </>
  );
};

export default Breadcrumbs;