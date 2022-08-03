import React, { useImperativeHandle } from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";
import type { Callbacks, FormInstance } from "./interface";

interface FormProps<Values = any> {
  form?: FormInstance<Values>;
  onFinish?: Callbacks<Values>["onFinish"];
  onFinishFailed?: Callbacks<Values>["onFinishFailed"];
}

const Form: React.FC<FormProps> = (props) => {
  const { children, onFinish, onFinishFailed, form } = props;

  const [formInstance] = useForm(form);
  formInstance.setCallbacks({ onFinish, onFinishFailed });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};

export default Form;
