import {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    ReactElement,
} from 'react';

import { FormOption } from '../../types';

import './Select.scss';

interface SelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    options: FormOption[];
    onChange: (selected: FormOption) => void;
    className?: string;
}

const Select: FC<SelectProps> = ({
    options,
    onChange,
    className = '',
    ...selectProps
}): ReactElement => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = options.find((option) => option.value === event.target.value) as FormOption;

        if (selectedOption) {
            onChange(selectedOption);
        }
    };

    return (
        <select
            {...selectProps}
            onChange={handleChange}
            className={`select ${className}`}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
