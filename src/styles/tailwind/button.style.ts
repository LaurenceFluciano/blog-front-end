import { ButtonVariant } from "../types/button.style"

export const buttonTailwindStyle: Record<ButtonVariant, string> =
{
    "primary": `px-4 py-2 
                bg-stone-800 rounded 
                text-white font-semibold 
                hover:bg-stone-900`,
    "secondary": `
                px-4 py-2 
                rounded-lg 
                border border-stone-900 border-solid 
                bg-white font-medium text-stone-800 
                transition
                hover:bg-stone-900 hover:text-white`
} 