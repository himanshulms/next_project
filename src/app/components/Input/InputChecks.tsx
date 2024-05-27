import './input.scss'

type InputProps = {
  id: string;
  label: string;
  type: string;
  className?: string;
};

const InputChecks = ({ id, type, label, className, ...rest }: InputProps) => {
  const classes = `${className || ''}`;
  return (
    <>
        <div className={`${type}Field ${classes}`} {...rest}>
            {label && (
                <label className="label gap-3 justify-start cursor-pointer p-0 inputLabel">
                    <input type={type} name={id} className={`${type} checked:bg-primary checkbox-primary`} />
                    <span className="label-text">{label}</span> 
                </label>
            )}
        </div>
    </>
  );
};

export default InputChecks;
