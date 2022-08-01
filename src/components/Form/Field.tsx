import React, { ChangeEvent } from "react";
import FieldContext from "./FieldContext";
import type { NamePath } from "./interface";

const Field: React.FC<{ name: NamePath }> = (props) => {
  const { getFieldValue, setFieldsValue } = React.useContext(FieldContext);

  const { children, name } = props;
  const getControlled = () => {
    return {
      value: getFieldValue && getFieldValue(name),
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e?.target?.value;
        setFieldsValue?.({ [name]: newValue });
      },
    };
  };
  return React.cloneElement(children as React.ReactElement, getControlled());
};

export default Field;
