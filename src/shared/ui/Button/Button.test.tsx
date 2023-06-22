import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button';

describe('button tests', () => {
  test('button simpliest test', () => {
    render(<Button>lang</Button>);

    expect(screen.getByText('lang')).toBeInTheDocument();
  });

  test('button with theme test', () => {
    render(
      <Button data-testid="test" theme={ThemeButton.CLEAR}>
        clear button
      </Button>,
    );

    expect(screen.getByTestId('test')).toHaveClass('clear');
    screen.debug();
  });
});
