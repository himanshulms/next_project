import './accordion.scss'

type AccordionProps = {
    id: string;
    className?: string;
    title: string;
    decs: string;
  };
  
const Accordion = ({ id, className, title, decs, ...rest }: AccordionProps) => {
    const classes = `${className || ''}`;
    return (
        <>  
            <div className={` ${classes} accordionBox collapse collapse-arrow overflow-visible rounded-none border border-neutral-content`} {...rest}>
                <input type="radio" name={id} /> 
                <div className="collapse-title text-base font-medium text-base-200 bg-base-100 pt-5 ">
                    {title}
                </div>
                <div className="collapse-content bg-neutral border-neutral-content border-t-[1px]"> 
                    <p>{decs}</p>
                </div>
            </div>
        </>
  );
};

export default Accordion;