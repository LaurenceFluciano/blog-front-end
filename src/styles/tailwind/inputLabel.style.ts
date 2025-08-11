import { InputLabelVariant } from "../types/inputLabel.style"

export const inputLabelTailwindStyle: InputLabelVariant =
{
    "label":{
        "primary":"block  font-semibold text-base", 
        "secondary":"example"
    },
    "input":{
        "primary": `
            block font-normal text-base
            m-none
            border rounded-[8px]
            border-stone-800
            bg-transparent
            px-2 py-1 w-5/6
            text-stone-950 placeholder-stone-400
            outline-none
            shadow-md/20
            focus:outline-solid
            focus:outline-2
            focus:outline-stone-800
            focus:outline-offset-[-1px]
            mb-5
           `
        , 
        "secondary":"example"
    },
} 