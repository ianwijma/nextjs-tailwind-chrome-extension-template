import 'react';

export type ExtensionOptions = {
    isExample: boolean,
}

export const defaultExtensionOptions: ExtensionOptions = {
    isExample: false,
}

export const getExtensionOptions = (): Promise<ExtensionOptions> => new Promise((resolve) => {
    console.log('[options] get');
    chrome.storage.sync.get(
        defaultExtensionOptions,
        (options) => resolve(options as ExtensionOptions)
    )
});

export const setExtensionOptions = (options: ExtensionOptions): Promise<ExtensionOptions> => new Promise((resolve) => {
    console.log('[options] set', { options });
    chrome.storage.sync.set(
        options,
        () => resolve(options)
    )
});

export const resetExtensionOptions = (): Promise<ExtensionOptions> => new Promise((resolve) => {
    console.log('[options] reset');
    chrome.storage.sync.set(
        defaultExtensionOptions,
        () => resolve(defaultExtensionOptions)
    )
});