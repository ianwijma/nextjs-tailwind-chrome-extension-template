import { useContext, useState } from "react";
import { createContext, PropsWithChildren } from "react";

type SetFunction<T> = (newValue: T) => void
type BlankFunction = () => void

type Context = {
    isExample: boolean,
    setExample: SetFunction<boolean>,
    resetExample: BlankFunction,
}

const mockSetFn: SetFunction<any> = (newValue) => { };
const mockBlankFn: BlankFunction = () => { };

const defaultContext: Context = {
    isExample: false,
    setExample: mockSetFn,
    resetExample: mockBlankFn,
}

const DevtoolsContext = createContext<Context>(defaultContext);

export const useDevtoolsContext = () => useContext(DevtoolsContext);

export const DevtoolsContextProvider = ({ children }: PropsWithChildren) => {
    const [isExample, setExample] = useState(false);
    const resetExample = () => setExample(false);

    const overwriteContext: Partial<Context> = {
        isExample,
        setExample,
        resetExample,
    };

    return (
        <DevtoolsContext.Provider value={{ ...defaultContext, ...overwriteContext }}>
            {children}
        </DevtoolsContext.Provider>
    )
}