import { InputVariant } from "./input.style"
import { LabelVariant } from "./label.style"

export type InputLabelVariant = {
    "label": Record<LabelVariant, string>, 
    "input": Record<InputVariant, string>,
}