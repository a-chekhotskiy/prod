import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'helpers/tests/RenderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('sidebar tests', () => {
    test('sidebar simpliest test', () => {
        renderWithTranslation(<Sidebar data-testid="sidebar" />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar opened test', () => {
        renderWithTranslation(<Sidebar data-testid="sidebar" />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleBtn = screen.getByTestId('toggleButton');
        fireEvent.click(toggleBtn);
        screen.debug();
        expect(screen.getByTestId('sidebar')).toHaveClass('opened');
    });
});
