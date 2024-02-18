export interface IBtOrderFormErrors {
    capacity?: string;
    timeUnitAmount?: string;
}

const validateNumber = (value?: number): string | undefined => {
    if (!value) {
        return 'Value is required';
    }

    if (value <= 0) {
        return 'Value must be greater than 0';
    }

    return undefined;
};

export const validatePayByNewChannelFormData = (capacity?: number, timeUnitAmount?: number): IBtOrderFormErrors => ({
    capacity: validateNumber(capacity),
    timeUnitAmount: validateNumber(timeUnitAmount),
});
