'use client';  
import { useEffect } from "react";
import { useState } from "react";


interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel:string;
    disabled?: boolean;
    secoondaryAction?: () => void;
    secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secoondaryAction,
    secondaryLabel
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen])
    return (
        <div></div>
    );
}

export default Modal;