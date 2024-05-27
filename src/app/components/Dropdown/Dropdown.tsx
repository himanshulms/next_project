import Image from 'next/image';
import DropdownIcon from '@/app/assets/images/svg/dropdown.svg';
import Link from 'next/link';

type DropdownProps = {
    title?: string; // add dorpdown title
    className?: string; // Add className prop to allow passing custom classes
};

const Dropdown = ({ title, className, ...rest }: DropdownProps) => {
  const classes = `${className || ''}`;
  const tabIndex: number = 1;
  return (
    <>
      <div className={`dropdown ${classes}`} {...rest}>
        <div tabIndex={tabIndex} role="button" className="btn m-1 text-base-100">
          {title} 
          <Image src={DropdownIcon} alt='icon' /> 
        </div>
        <ul tabIndex={tabIndex} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
          <li><Link href="/about">Item 1</Link></li>
          <li><Link href="#">Item 2</Link></li>
          <li><Link href="#">Item 3</Link></li>
        </ul>
      </div>
    </>
  );
};

      export default Dropdown;