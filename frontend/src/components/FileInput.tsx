import React from 'react';
import { Input } from "@chakra-ui/react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInput: React.FC<Props> = ({onChange}) => {
  return (
    <Input
      type="file"
      accept="directory"
      onChange={onChange}
      display="none"
      {...({ webkitdirectory: "true" } as any)}
      id="destination-input"
    />
  );
}

export default FileInput;
