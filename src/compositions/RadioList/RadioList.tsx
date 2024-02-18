import { ChangeEvent, FC, ReactElement } from 'react';

import InputLabel from '../../components/InputLabel/InputLabel';
import Radio from '../../components/Radio/Radio';
import { FormOption } from '../../types';

import './RadioList.scss';

interface RadioListProps {
    id?: string;
    label: string;
    hideLabel?: boolean;
    name: string;
    options: FormOption[];
    value: string;
    tabIndex?: number;
    required?: boolean;
    disabled?: boolean;
    onChange: (value: string) => void;
    className?: string;
    optionWrapperClassName?: string;
}

const RadioList: FC<RadioListProps> = ({
    id,
    label,
    hideLabel = false,
    name,
    options,
    value,
    tabIndex,
    required,
    disabled,
    onChange,
    className = '',
    optionWrapperClassName = '',
}): ReactElement => {
    const handleOnRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.currentTarget.value);
    };

    return (
        <label
            id={id}
            aria-label={hideLabel ? label : undefined}
            className={`radio-list ${className}`}
        >
            {!hideLabel && (
                <InputLabel
                    label={label}
                    className="radio-list__label"
                />
            )}

            <div className={`radio-list__option-wrapper ${optionWrapperClassName}`}>
                {options.map(option => (
                    <Radio
                        key={option.value}
                        name={name}
                        option={option}
                        selected={value}
                        tabIndex={tabIndex}
                        required={required}
                        disabled={disabled}
                        onChange={handleOnRadioChange}
                        className="radio-list__radio"
                    />
                ))}
            </div>
        </label>
    );
};

export default RadioList;
