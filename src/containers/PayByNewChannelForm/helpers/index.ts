import { IBtOrderFormData } from '../../../entities/IBtOrder/IBtOrder';

export interface IBtOrderFormErrors {
    lspBalanceSat?: string;
}

const validateNumber = (value: number): string | undefined => {
    if (value <= 0) {
        return 'Value must be greater than 0';
    }

    return undefined;
};

export const validatePayByNewChannelFormData = (formData: IBtOrderFormData): IBtOrderFormErrors => ({
    lspBalanceSat: validateNumber(formData.lspBalanceSat),
});
