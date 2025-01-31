import { Form } from "react-bootstrap";
import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type TInputProps<TFieldValue extends FieldValues> = {
  label: string;
  name: Path<TFieldValue>;
  type?: "text" | "password" | "email";
  register: UseFormRegister<TFieldValue>;
  error?: string;
};
const Input = <TFieldValue extends FieldValues>({
  type = "text",
  register,
  name,
  error,
  label,
}: TInputProps<TFieldValue>) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} {...register(name)} isInvalid={!!error} />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;
