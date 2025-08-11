import { inputLabelStyle } from "@/styles/adapters.style"
import { InputVariant } from "@/styles/types/input.style";
import { LabelVariant } from "@/styles/types/label.style";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export type InputLabelProps = {
    variant?: {"label": LabelVariant,"input": InputVariant};
    labelText: string,
    placeHolder: string,
    name: string,
    value: string,
    onChange?: ChangeEventHandler,
    inputType?: HTMLInputTypeAttribute,

}


export default function InputLabelComponent({variant, labelText, name, placeHolder, inputType="text",value,onChange}: InputLabelProps)
{


    return <>
        <label 
            htmlFor={name}  
            className={inputLabelStyle["label"][variant?.label || "primary"]}
        >
            {labelText}
        </label>
        
        <input 
            type={inputType}  
            onChange={onChange}
            value={value}
            name={name} 
            placeholder={placeHolder} 
            className={inputLabelStyle["input"][variant?.input || "primary"]} />
    </>
}