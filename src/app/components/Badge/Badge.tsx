import { ReactNode } from 'react';
import './badge.scss'
type BadgeProps = {
    children: ReactNode; // add inner text 
    className?: string; 
    size?: string; //add size class
    variant?: string; // add color class
    weight?: string; // add font class
  };
const Badge = ({ children, className, size, variant, weight, ...rest }: BadgeProps) => {
    const classes = `${size || ''} ${variant || ''} ${weight || ''} ${className || ''} py-2 px-3 badge whitespace-nowrap` ;
    return (
        <>
            <div className={classes}>
                {children}
            </div>
        </>
  );
};

export default Badge;