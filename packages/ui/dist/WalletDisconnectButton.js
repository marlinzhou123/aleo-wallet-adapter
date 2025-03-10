import React, { useCallback, useMemo } from 'react';
import { useWallet } from '@aleo123/aleo-wallet-adapter-react';
import { Button } from './Button';
import { WalletIcon } from './WalletIcon';
export const WalletDisconnectButton = ({ children, disabled, onClick, ...props }) => {
    const { wallet, disconnect, disconnecting } = useWallet();
    const handleClick = useCallback((event) => {
        if (onClick)
            onClick(event);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        if (!event.defaultPrevented)
            disconnect().catch(() => { });
    }, [onClick, disconnect]);
    const content = useMemo(() => {
        if (children)
            return children;
        if (disconnecting)
            return 'Disconnecting ...';
        if (wallet)
            return 'Disconnect';
        return 'Disconnect Wallet';
    }, [children, disconnecting, wallet]);
    return (React.createElement(Button, { className: "wallet-adapter-button-trigger", disabled: disabled || !wallet, startIcon: wallet ? React.createElement(WalletIcon, { wallet: wallet }) : undefined, onClick: handleClick, ...props }, content));
};
//# sourceMappingURL=WalletDisconnectButton.js.map