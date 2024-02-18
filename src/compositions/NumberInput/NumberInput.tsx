import {
    ChangeEvent,
    forwardRef,
    ForwardRefExoticComponent,
    ReactElement,
    Ref,
} from 'react';

import ErrorLabel from '../../components/ErrorLabel/ErrorLabel';
import Input, { InputProps } from '../../components/Input/Input';
import InputLabel from '../../components/InputLabel/InputLabel';

import './NumberInput.scss';

interface NumberInputProps extends Omit<InputProps, 'onChange'> {
    hideLabel?: boolean;
    error?: string;
    label: string;
    tooltip?: string;
    onChange: (value: number) => void;
}

const NumberInput: ForwardRefExoticComponent<NumberInputProps> = forwardRef(({
    label,
    hideLabel,
    tabIndex,
    disabled,
    error = '',
    tooltip,
    onChange,
    className = '',
    ...inputProps
}, ref: Ref<HTMLInputElement>): ReactElement => {
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
                    ref={ref}
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
});

export default NumberInput;
