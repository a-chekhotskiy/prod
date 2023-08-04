import { classNames } from 'helpers/classnames';
import { Modal } from 'shared/ui/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { AuthFormAsync } from '../AuthForm/AuthForm.async';
import cls from './AuthModal.module.scss';

interface AuthModalProps {
    className?: string;
    open: boolean;
    onClosed: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = (props) => {
    const { className, open, onClosed } = props;

    return (
        <Modal className={classNames(cls.authModal, {}, [className])} open={open} onClosed={onClosed}>
            <Suspense fallback={<Loader />}>
                <AuthFormAsync />
            </Suspense>
        </Modal>
    );
};
