import { PropsWithChildren } from "react"

export const FormWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="px-3 py-1">
            {children}
        </div>
    )
}