import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";
import type { Callbacks } from "./interface";

const Form: React.FC<Callbacks> = (props) => {
  const { children, onFinish } = props;

  const [formInstance] = useForm();
  formInstance.setCallbacks({ onFinish });

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
