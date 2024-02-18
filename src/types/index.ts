export interface FormOption {
    label: string;
    value: string;
}

export enum PaymentMethod {
    newChannel = 'newChannel',
    payInvoice = 'payInvoice',
}

export enum ExpiryTimeUnit {
    minutes = 'minutes',
    hours = 'hours',
    days = 'days',
    weeks = 'weeks',
}
