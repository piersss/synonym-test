import React, { FC, useMemo } from 'react';

import InputLabel from '../../components/InputLabel/InputLabel';
import Select from '../../components/Select/Select';
import { ExpiryTimeUnit, FormOption } from '../../types';
import NumberInput from '../NumberInput/NumberInput';
import { getExpiryTimeUnitOptions, transformToExpiryTimeUnit } from './helpers';

import './SelectExpiry.scss';

interface SelectExpiryProps {
    amount?: number;
    error?: string;
    timeUnit: ExpiryTimeUnit;
    onAmountChange: (amount?: number) => void;
    onTimeUnitChange: (timeUnit: ExpiryTimeUnit) => void;
    className?: string;
}

const SelectExpiry: FC<SelectExpiryProps> = ({
    amount,
    error,
    timeUnit,
    className = '',
    onAmountChange,
    onTimeUnitChange,
}) => {
    const expiryOptions = useMemo(() => getExpiryTimeUnitOptions(), []);

    const unitOption = useMemo(
        () => expiryOptions.find(option => option.value === timeUnit) as FormOption,
        [expiryOptions, timeUnit],
    );

    const handleDropdownExpiryOptionChange = (option: FormOption) => {
        onTimeUnitChange(transformToExpiryTimeUnit(option.value));
    };

    return (
        <div className={`select-expiry ${className}`}>
            <InputLabel
                label="Select Channel Expiry"
                tooltip="The time after which the channel will be closed if it is not used."
            />

            <div className="select-expiry__inputs-wrapper">
                <NumberInput
                    hideLabel
                    error={error}
                    label="Amount"
                    value={amount || ''}
                    onChange={onAmountChange}
                    className="select-expiry__input-amount"
                />

                <Select
                    options={expiryOptions}
                    value={unitOption.value}
                    onChange={handleDropdownExpiryOptionChange}
                    className="select-expiry__select"
                />
            </div>
        </div>
    );
};

export default SelectExpiry;
