import './input.scss'

type InputProps = {
  id?: string;
  label?: string;
  className?: string;
  placeholder?: string;
};

const Textarea= ({ id, label, className, placeholder, ...rest }: InputProps) => {
  const classes = `${className || ''}`;
  return (
    <>
        <div className='inputField'>
            {label && (
                <label htmlFor={id} className="block inputLabel">
                {label}
                </label>
            )}
            <div className="mt-1">
                <div className="rounded-0 ">
                    <textarea
                        id={id}
                        autoComplete="off"
                        className={`${classes} py-3 px-4 border rounded-none block`}
                        placeholder={placeholder}
                        {...rest}
                    ></textarea>
                </div>
            </div>
        </div>
    </>
  );
};

export default Textarea;
