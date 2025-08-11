import { buttonStyle } from "@/styles/adapters.style";

import { ButtonVariant } from "@/styles/types/button.style";
import { MouseEventHandler } from "react";

export type ButtonProps = {
    variant?: ButtonVariant;
    otherStyle?: string;
    children: React.ReactNode;
    onClick?: MouseEventHandler;
    disabled?: boolean,
    value?: string
}



export default function Button({
    variant="primary",
    otherStyle, 
    onClick,
    value,
    disabled, 
    children}: ButtonProps)
{
    return <button 
    value={value}
    className={`
    ${buttonStyle[variant]} 
    ${otherStyle}`} 
    
    onClick={onClick}
    disabled={disabled}
    >{children}</button>
}