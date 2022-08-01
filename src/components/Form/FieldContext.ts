import React from "react";
import type { FormInstance } from "./interface";

const FieldContext = React.createContext<Partial<FormInstance>>({});

export default FieldContext;
