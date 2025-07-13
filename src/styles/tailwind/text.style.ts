import { TextVariant } from "../styletypes/text.style"


export const textTailwindStyle: Record<TextVariant, string> = {
  big: `font-bold max-sm:text-3xl text-5xl`,      
  semibig: `font-semibold max-sm:text-xl text-2xl`, 
  medium: `text-base`,                           
  semismall: `text-sm`,                          
  small: `text-xs`,                              
  navbar: `text-sm font-medium`,
  "header-space-title": `pt-4 pl-1 pb-4 pr-2`               
}