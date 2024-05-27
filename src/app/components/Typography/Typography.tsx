import { ReactNode } from 'react';

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyProps = {
  tag?: TagVariants; // add tag
  children: ReactNode; // add inner text 
  className?: string; // Add className prop to allow passing custom classes
  size?: string; //add size class
  color?: string; // add color class
  weight?: string; // add font class
  title?: string; // add tool tip
};

const Typography = ({ tag = 'p', children, className, size, color, weight, title, ...rest }: TypographyProps) => {
  const Tag = tag || 'p'; // Default to 'p' if tag is not provided or invalid
  const classes = `${size || ''} ${color || ''} ${weight || ''} ${className || ''} text`;
  return (
    <Tag className={classes} data-tip={title} {...rest}>
      {children}
    </Tag>
  );
};

export default Typography;