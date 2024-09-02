'use static';

import { Suspense } from "react";
import { DevtoolsContent } from "./content";

export const generateStaticParams = async () => ([]);

const Devtools = () => <Suspense>
    <DevtoolsContent />
</Suspense>

export default Devtools;