/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { classNames } from 'helpers/classnames/classNames';
import { ReactNode, useEffect } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    open: boolean;
    onClosed: () => void;
    children: ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { className, open, onClosed, children } = props;

    useEffect(() => {
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClosed();
        });
    }, [onClosed]);

    return (
        <div className={classNames(cls.overlay, { [cls.openOverlay]: open }, [className])} onClick={onClosed}>
            <div className={classNames(cls.modal, { [cls.openModal]: open })} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
