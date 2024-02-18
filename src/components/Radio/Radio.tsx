import { FC, InputHTMLAttributes, ReactElement } from 'react';

import classNames from 'classnames';

import { FormOption } from '../../types';

import './Radio.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    option: FormOption;
    name: string;
    selected: string;
    className?: string;
}

const Radio: FC<RadioProps> = ({
    option,
    selected,
    disabled,
    className = '',
    ...inputProps
}): ReactElement => {
    const radioClassNames = classNames('radio', {
        'radio--is-disabled': !!disabled,
    }, className);

    return (
        <label className={radioClassNames}>
            <input
                {...inputProps}
                type="radio"
                value={option.value}
                checked={option.value === selected}
                disabled={disabled}
                className="radio__input"
            />

            <div className="radio__box" />
            <span className="radio__label">
                {option.label}
            </span>
        </label>
    );
};

export default Radio;
