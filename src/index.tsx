import React from "react";
import Form, { Field } from "./components/Form";

const index: React.FC = () => {
  return (
    <Form
      onFinish={(values) => {
        console.log("values", values);
      }}
    >
      <Field name={"userName"}>
        <input placeholder="用户名" />
      </Field>
      <Field name={"password"}>
        <input placeholder="密码" />
      </Field>
      <button type="submit">提交</button>
    </Form>
  );
};

export default index;
