import React from 'react';
export interface ButtonType {
    variant?: 'contained' | 'outlined' | 'text';
    label?: string;
    borderRadius?: string | number;
    type?: 'default' | 'primary' | 'secondary' | 'disabled' | 'link';
    linkDestination?: string;
    disableElevation?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & ButtonType & React.RefAttributes<unknown>>;
export default Button;
