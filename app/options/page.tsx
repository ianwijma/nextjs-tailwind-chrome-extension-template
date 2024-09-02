import { Suspense } from "react";
import { OptionsContent } from "./content";

export const generateStaticParams = async () => ([]);

const Options = () => {
    return (
        <Suspense>
            <OptionsContent />
        </Suspense>
    )
}

export default Options;