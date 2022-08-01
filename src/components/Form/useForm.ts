import { useRef } from "react";
import type { Store, NamePath, Callbacks, FormInstance } from "./interface";

class FormStore {
  private store: Store = {};
  private callbacks: Callbacks = {};

  getFieldsValue = () => {
    return { ...this.store };
  };

  getFieldValue = (name: NamePath) => {
    return this.store[name];
  };

  setFieldsValue = (newStore: Store) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
  };

  setCallbacks = (callbacks: Callbacks) => {
    this.callbacks = { ...this.callbacks, ...callbacks };
  };

  submit = () => {
    const { onFinish } = this.callbacks;
    if (onFinish) {
      onFinish(this.getFieldsValue());
    }
  };

  getForm = (): FormInstance => {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      submit: this.submit,
      setCallbacks: this.setCallbacks,
    };
  };
}

export default function useForm<Values = any>(
  form?: FormInstance<Values>
): [FormInstance<Values>] {
  const formRef = useRef<FormInstance>();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef!.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
