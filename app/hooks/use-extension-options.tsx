import { useEffect, useState } from "react";
import { defaultExtensionOptions, ExtensionOptions, getExtensionOptions } from "../lib/extension-options"

export const useExtensionOptions = () => {
    const [extensionOptions, setExtensionOptions] = useState<ExtensionOptions>(defaultExtensionOptions);

    useEffect(() => {
        (async () => {
            const options = await getExtensionOptions();
            setExtensionOptions(options);
        })()
    }, []);

    return { extensionOptions }
}