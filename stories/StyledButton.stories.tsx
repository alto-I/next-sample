import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { StyledButton } from '../components/StyledButton';
import { action } from '@storybook/addon-actions';

type ButtonProps = {
  color: string;
  backgroundColor: string;
  border: string;
};

export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof StyledButton>;

const incrementAction = action('increment')

export const Primary = (props: ButtonProps) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count)
    setCount((c) => c + 1)
  }

  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Primary Count: {count}
    </StyledButton>
  );
};

export const Success = (props: ButtonProps) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  );
};

export const Transparent = (props: ButtonProps) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  );
};
