import React from 'react';
type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<Props> = ({onChange}) => {
    return <input type="text" onChange={onChange} id="destination-input" />;
  }

export default TextInput;