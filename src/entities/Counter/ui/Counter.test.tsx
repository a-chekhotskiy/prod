import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'helpers/tests/componentRender';
import { Counter } from './Counter';

describe('counter tests', () => {
    test('render test', () => {
        componentRender(<Counter data-testid="value" />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('value')).toHaveTextContent('10');
    });

    test('decrement', () => {
        componentRender(<Counter data-testid="value" />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value')).toHaveTextContent('9');
    });

    test('increment', () => {
        componentRender(<Counter data-testid="value" />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value')).toHaveTextContent('11');
    });
});
