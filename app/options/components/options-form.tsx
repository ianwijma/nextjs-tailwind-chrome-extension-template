import { Button, Checkbox, Divider, Skeleton } from "@nextui-org/react";
import { Field, Form, Formik } from "formik";
import { useOptionsContext } from "../context/options";
import { optionsSchema } from "../lib/options";
import { FormWrapper } from "./form-wrapper";

const RemoteFormSkeleton = () => {
    return (
        <>
            <Skeleton className="rounded-lg">
                <Checkbox>Is Example</Checkbox>
            </Skeleton>
        </>
    )
}

export const OptionsForm = () => {
    const { loading, options, updateOptions, resetOptions } = useOptionsContext();

    const confirmResetSettings = () => {
        if (confirm('This will reset the options to their default state')) {
            resetOptions();
        }
    }

    if (loading) {
        return (
            <FormWrapper>
                <RemoteFormSkeleton />
            </FormWrapper>
        )
    }

    return (
        <>
            <FormWrapper>
                <Formik
                    validationSchema={optionsSchema}
                    initialValues={options}
                    onSubmit={(values, actions) => {
                        updateOptions({ ...options, ...values });
                        actions.setSubmitting(false);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field name='useRemote'>
                                {
                                    ({ field }: any) =>
                                        <Checkbox
                                            errorMessage={errors.isExample}
                                            isInvalid={errors.isExample && touched.isExample}
                                            defaultSelected={field.value}
                                            {...field}>
                                            Is Example
                                        </Checkbox>
                                }
                            </Field>
                            <Divider className="my-3" />
                            <Button type="submit" className='mr-3'>
                                Save
                            </Button>
                            <Button type="button" color="danger" onClick={() => confirmResetSettings()}>Reset all settings</Button>
                        </Form>
                    )}
                </Formik>
            </FormWrapper>
        </>
    )
}