import React from 'react';
import { WalletReadyState } from '@aleo123/aleo-wallet-adapter-base';
import { Button } from './Button';
import { WalletIcon } from './WalletIcon';
export const WalletListItem = ({ handleClick, tabIndex, wallet }) => {
    return (React.createElement("li", null,
        React.createElement(Button, { onClick: handleClick, startIcon: React.createElement(WalletIcon, { wallet: wallet }), tabIndex: tabIndex },
            wallet.adapter.name,
            wallet.readyState === WalletReadyState.Installed && React.createElement("span", null, "Detected"))));
};
//# sourceMappingURL=WalletListItem.js.map