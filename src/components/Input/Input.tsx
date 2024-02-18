import {
    forwardRef,
    ForwardRefExoticComponent,
    InputHTMLAttributes,
    ReactElement,
    Ref,
    RefAttributes,
} from 'react';

import classNames from 'classnames';

import './Input.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    error?: string;
}

const Input: ForwardRefExoticComponent<InputProps> = forwardRef(({
    type,
    error = '',
    className = '',
    ...inputProps
}, ref: Ref<HTMLInputElement>): ReactElement => {
    const inputClassNames = classNames('input', {
        'input--has-error': !!error,
    }, className);

    return (
        <input
            {...inputProps}
            ref={ref}
            type={type || 'text'}
            className={inputClassNames}
        />
    );
});

export default Input;
