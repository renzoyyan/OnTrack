import { ErrorMessage, Field } from "formik";

const Input = ({
  name,
  label,
  type = "text",
  divClass,
  className,
  placeholder,
  autoComplete = "off",
  error,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <Field
        type={type}
        min={type === "number" ? 0 : undefined}
        className={`form-control ${className} ${error ? "form-error" : ""}`}
        placeholder={placeholder}
        name={name}
        id={name}
        autoComplete={autoComplete}
        {...rest}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="error-msg pointer-events-none"
      />
    </div>
  );
};

export default Input;
