'use client';

import { OptionsForm } from "./components/options-form";
import { OptionsContextProvider } from "./context/options";

export const OptionsContent = () => {
    return (
        <OptionsContextProvider>
            <OptionsForm />
        </OptionsContextProvider>
    )
}
