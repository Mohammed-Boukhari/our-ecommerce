import { Form } from "react-bootstrap";
import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type TInputProps<TFieldValue extends FieldValues> = {
  label: string;
  type?: "text" | "password" | "email";
  name: Path<TFieldValue>;
  error?: string;
  register: UseFormRegister<TFieldValue>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  formText?: string;
  success?: string;
  disabled?: boolean;
};
const Input = <TFieldValue extends FieldValues>({
  type = "text",
  name,
  error,
  label,
  formText,
  success,
  disabled,
  onBlur,
  register,
}: TInputProps<TFieldValue>) => {
  const onblurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        {...register(name)}
        onBlur={onblurHandler}
        isInvalid={!!error}
        isValid={!!success}
        disabled={disabled}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
      {formText && <Form.Text muted>{formText}</Form.Text>}
    </Form.Group>
  );
};

export default Input;
