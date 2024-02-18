import {
    ChangeEvent,
    FC,
    ReactElement,
    useRef,
} from 'react';

import ErrorLabel from '../../components/ErrorLabel/ErrorLabel';
import Input, { InputProps } from '../../components/Input/Input';
import InputLabel from '../../components/InputLabel/InputLabel';

import './NumberInput.scss';

interface NumberInputProps extends Omit<InputProps, 'onChange'> {
    hideLabel?: boolean;
    label: string;
    tooltip?: string;
    onChange: (value: number) => void;
}

const NumberInput: FC<NumberInputProps> = ({
    label,
    hideLabel,
    tabIndex,
    disabled,
    error = '',
    tooltip,
    onChange,
    className = '',
    ...inputProps
}): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => onChange(Number(event.currentTarget.value));

    return (
        <label
            aria-label={hideLabel ? label : undefined}
            className={`number-input ${className}`}
        >
            {!hideLabel && (
                <InputLabel
                    label={label}
                    tooltip={tooltip}
                    className="number-input__label"
                />
            )}

            <div className="number-input__field-wrapper">
                <Input
                    {...inputProps}
                    ref={inputRef}
                    type="number"
                    tabIndex={tabIndex}
                    disabled={disabled}
                    error={error}
                    onChange={handleChange}
                    className="number-input__field"
                />
            </div>

            {error && (
                <ErrorLabel
                    text={error}
                    className="number-input__error-label"
                />
            )}
        </label>
    );
};

export default NumberInput;
