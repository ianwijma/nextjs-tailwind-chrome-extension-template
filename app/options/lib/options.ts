import { boolean, object } from "yup";
import { ExtensionOptions } from "../../lib/extension-options";

export const optionsSchema = object<ExtensionOptions>({
    isExample: boolean().label('Example').required(),
});