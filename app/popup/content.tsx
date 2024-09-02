'use client';

import { DefaultPopup } from "./components/default-popup";
import { PopupContextProvider } from "./context/popup";


export const PopupContent = () => {
    return (
        <PopupContextProvider>
            <DefaultPopup />
        </PopupContextProvider>
    )
}
