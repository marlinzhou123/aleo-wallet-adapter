import React, { useCallback } from 'react';
import { Button } from './Button';
import { useWalletModal } from './useWalletModal';
export const WalletModalButton = ({ children = 'Select Wallet', onClick, ...props }) => {
    const { visible, setVisible } = useWalletModal();
    const handleClick = useCallback((event) => {
        if (onClick)
            onClick(event);
        if (!event.defaultPrevented)
            setVisible(!visible);
    }, [onClick, setVisible, visible]);
    return (React.createElement(Button, { className: "wallet-adapter-button-trigger", onClick: handleClick, ...props }, children));
};
//# sourceMappingURL=WalletModalButton.js.map