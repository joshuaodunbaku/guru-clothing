import "./form-input.style.scss";
const FormInput = ({label, ...otherProps}) => {
  return (
    <div className='group'>
        <input className='form-input' id={label} {...otherProps}/>
        {label 
          && 
          (<label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`} htmlFor={label}>{label}</label>)
        }
    </div>
  )
}

export default FormInput;