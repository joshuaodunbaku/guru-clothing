import { FormInputLabel, Input, Group } from "./form-input.style.js";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input id={label} {...otherProps} />
      {label
        &&
        (<FormInputLabel shrink={otherProps.value.length} htmlFor={label}>{label}</FormInputLabel>)
      }
    </Group>
  );
};

export default FormInput;