import React from 'react';
import { Button as ButtonComponent } from '@/components/ui/button';
function Button({
  text,
  fromCurrency = '',
  toCurrency = '',
  to = '',
  ...rest
}) {
  return (
    <ButtonComponent
      {...rest}
    >{`${text} ${fromCurrency} ${to} ${toCurrency}`}</ButtonComponent>
  );
}

export default Button;
