import React from "react";
import InternalForm from "./Form";
import Field from "./Field";
import useForm from "./useForm";

type InternalFormType = typeof InternalForm;

interface FormInterface extends InternalFormType {
  useForm: typeof useForm;
  Field: typeof Field;
}

const Form = InternalForm as FormInterface;
Form.useForm = useForm;
Form.Field = Field;

export { Field, useForm };
export default Form;
