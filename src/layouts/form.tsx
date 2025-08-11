import { FormEventHandler } from "react"

type FormProps = 
{
    childrens: React.ReactNode[],
    formStyle: string,
    containerStyle: string,
    onSubmit: FormEventHandler,
    action?: string,
    method?: string
}

export default function Form({
    childrens,
    formStyle,
    containerStyle,
    action,
    onSubmit,
    method
}: FormProps)
{
    return <div className={containerStyle}>
        <form 
        className={formStyle} 
        action={action} 
        method={method}
        onSubmit={onSubmit}
        >
            {
                childrens.map((children,key) => {
                    return <div key={key}>{children}</div> 
                })
            }
        </form>
    </div>
}