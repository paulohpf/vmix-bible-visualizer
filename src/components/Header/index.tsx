import React from 'react';
import { Select } from "antd";
import { Wrapper } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Select
        style={{ width: 120 }}
        options={[
          { value: 'NVI-BR', label: "Almeida Revisada Imprensa Bíblica" },
          { value: 'ACF-BR', label: "Almeida Corrigida e Revisada Fiel" },
          { value: 'AA-BR', label: "Almeida Revisada Imprensa Bíblica" },
        ]} />
    </Wrapper>
  )
}

export default Header;
