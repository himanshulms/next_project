import './input.scss'

type SelectProps = {
  label?: string;
  className?: string;
};

const Select= ({ label, className, ...rest }: SelectProps) => {
  const classes = `${className || ''}`;
  return (
    <>
        <div className='selectField'>
            {label && (
                <label className="block inputLabel">
                    {label}
                </label>
            )}
            <select className={` ${classes} select p-4 pr-10 border rounded-none mt-1`}>
                <option disabled selected>{label}</option>
                <option value="someOption" >Homer</option>
                <option value="someOption">Marge</option>
                <option value="someOption">Bart</option>
                <option value="someOption">Lisa</option>
                <option value="someOption">Maggie</option>
            </select>
        </div>
    </>
  );
};

export default Select;
