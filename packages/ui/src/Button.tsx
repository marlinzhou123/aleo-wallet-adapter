import { DecryptPermission, WalletAdapterNetwork } from '@aleo123/aleo-wallet-adapter-base';
import type { CSSProperties, FC, MouseEvent, PropsWithChildren, ReactElement } from 'react';
import React from 'react';

export type ButtonProps = PropsWithChildren<{
    className?: string;
    disabled?: boolean;
    decryptPermission?: DecryptPermission;
    network?: WalletAdapterNetwork;
    endIcon?: ReactElement;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    startIcon?: ReactElement;
    style?: CSSProperties;
    tabIndex?: number;
}>;

export const Button: FC<ButtonProps> = (props) => {
    return (
        <button
            className={`wallet-adapter-button ${props.className || ''}`}
            disabled={props.disabled}
            style={props.style}
            onClick={props.onClick}
            tabIndex={props.tabIndex || 0}
            type="button"
        >
            {props.startIcon && <i className="wallet-adapter-button-start-icon">{props.startIcon}</i>}
            {props.children}
            {props.endIcon && <i className="wallet-adapter-button-end-icon">{props.endIcon}</i>}
        </button>
    );
};
