export const getFormErrorsLength = (errors: any) => (
    Object.values(errors).filter(value => !!value).length
);
