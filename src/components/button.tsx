import { ButtonProps } from "./interface/button.interface";
import { buttonStyle } from "@/styles/adapters.style";

export default function Button({variant="primary", children}: ButtonProps)
{
    return <button className={buttonStyle[variant]}>{children}</button>
}