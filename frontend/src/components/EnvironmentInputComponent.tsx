import React, { useMemo } from "react";
import { isRunningInElectron } from "../service/enviroment";
import FileInput from "./FileInput";
import TextInput from "./TextInput";

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const EnvironmentInputComponent: React.FC<Props> = ({
    onChange,
  }): JSX.Element => {
    const Component = useMemo(() => {
      if (isRunningInElectron()) {
        return FileInput;
      } else {
        return TextInput;
      }
    }, []);
  
    return <Component onChange={onChange} />;
  };
  
  export default EnvironmentInputComponent;