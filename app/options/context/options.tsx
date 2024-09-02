import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { defaultExtensionOptions, ExtensionOptions, getExtensionOptions, resetExtensionOptions, setExtensionOptions } from "../../lib/extension-options";

type SetFunction<T> = (newValue: T) => void
type BlankFunction = () => void

type Context = {
    loading: boolean,
    options: ExtensionOptions,
    updateOptions: SetFunction<ExtensionOptions>,
    resetOptions: BlankFunction,
}

const mockSetFn: SetFunction<any> = (newValue) => { };
const mockBlankFn: BlankFunction = () => { };

const defaultContext: Context = {
    loading: false,
    options: defaultExtensionOptions,
    updateOptions: mockSetFn,
    resetOptions: mockBlankFn,
}

const Options = createContext<Context>(defaultContext);

export const useOptionsContext = () => useContext(Options);

export const OptionsContextProvider = ({ children }: PropsWithChildren) => {
    const [loading, setLoading] = useState(true);

    // Loading is too quick, we need to delay the loading a bit.
    const setLoadingDelayed = (newLoading: boolean) => setTimeout(() => setLoading(newLoading), 500);
    const [options, setOptions] = useState<ExtensionOptions>(defaultExtensionOptions);

    const updateOptions = async (newOptions: ExtensionOptions) => {
        setLoading(true);

        setExtensionOptions(newOptions).then((updatedOptions) => {
            setOptions(updatedOptions);
            setLoadingDelayed(false)
        });
    }

    const resetOptions = () => {
        setLoading(true);
        resetExtensionOptions().then((options) => {
            setOptions(options);
            setLoadingDelayed(false)
        });
    }

    const overwriteContext: Partial<Context> = {
        loading,
        options,
        updateOptions,
        resetOptions,
    }

    useEffect(() => {
        // initially load options
        getExtensionOptions().then(options => {
            setOptions(options);
            setLoadingDelayed(false);
        })
    }, []);

    return (
        <Options.Provider value={{ ...defaultContext, ...overwriteContext }}>
            {children}
        </Options.Provider>
    )
}
