import Image from 'next/image';
import DropdownIcon from '@/app/assets/images/svg/dropdown.svg';
import Link from 'next/link';
import Typography from '@/app/components/Typography';

type ProfileProps = {
    title?: string; // add dorpdown title
    className?: string; // Add className prop to allow passing custom classes
    profileImage?: any; // Add proile image
    position?: string;
};

const Profile = ({ title, className, profileImage, position, ...rest }: ProfileProps) => {
  const classes = `${className || ''}`;
  const tabIndex: number = 1;
  return (
    <>
      <div className={`dropdown cursor-pointer ${classes}`} {...rest}>
        <div tabIndex={tabIndex}  className=" m-1 flex gap-4 items-start">
            <div className='flex flex-row gap-4'>
                {profileImage && (
                    <div className='profileImage flex-1'>
                        <Image src={profileImage} alt="profileImage" />
                    </div>
                )} 
                
                <div className=' flex-row gap-4 hidden lg:flex'>
                    <div className='profileData flex flex-col items-start'>
                        <Typography 
                            tag='h4'
                            title={title}
                            size='text-base'
                            weight='font-normal'
                            color='text-info-content'
                        >
                            {title}
                        </Typography>
                        <Typography 
                            tag='h6'
                            title={position}
                            size='text-sm'
                            weight='font-normal'
                            color='text-neutral-content'
                        >
                            {position}
                        </Typography>
                    </div>
                    <div className='pt-2 '>
                        <Image src={DropdownIcon} alt='icon' /> 
                    </div>
                </div>
            </div>
            
        </div>

        {/* profle dropdown */}

        {/* <ul tabIndex={tabIndex} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
          <li><Link href="/about">Profile</Link></li>
        </ul> */}
      </div>
    </>
  );
};

export default Profile;