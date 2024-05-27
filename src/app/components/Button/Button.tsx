import Image from 'next/image';
import { ReactNode } from 'react'; 
import "./button.scss";

type ButtonProps = {
  icon?: string;
  iconPosition?: 'left' | 'right';
  children?: ReactNode; // add inner text 
  className?: string; // Add className prop to allow passing custom classes
  size?: string; //add button size class
  variant?: string; // add color class
  onClick?: any;
} 

const Button = ({ size = '', children, variant, className, icon, iconPosition, onClick, ...rest }: ButtonProps) => {
    const Size = size || ''; 
    const classes = `btn uppercase border rounded-none ${Size || ''} ${variant || ''} ${className || ''} `;
    
    return (
        <button className={classes} {...rest} onClick={onClick}>
            {icon && iconPosition === 'left' && <Image src={icon} alt="icon" /> }
            {children}
            {icon && iconPosition === 'right' && <Image src={icon} alt="icon" /> }
        </button>
    );
  };

export default Button;
