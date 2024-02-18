import { FC, ReactElement } from 'react';

import RadioList from '../../compositions/RadioList/RadioList';
import { PaymentMethod } from '../../types';

import './PaymentTypeSelector.scss';

interface PaymentTypeSelectorProps {
    value: PaymentMethod;
    onChange: (value: PaymentMethod) => void;
    className?: string;
}

const PaymentTypeSelector: FC<PaymentTypeSelectorProps> = ({ value, onChange, className = '' }): ReactElement => {
    const handleChange = (newValue: string) => {
        onChange(newValue as PaymentMethod);
    };

    return (
        <RadioList
            hideLabel
            label="Payment type"
            name="payment-type"
            options={[
                { label: 'New channel', value: PaymentMethod.newChannel },
                { label: 'Pay invoice', value: PaymentMethod.payInvoice },
            ]}
            value={value}
            onChange={handleChange}
            className={`payment-type-selector ${className}`}
            optionWrapperClassName="payment-type-selector__option-wrapper"
        />
    );
};

export default PaymentTypeSelector;
