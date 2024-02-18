import { FC, ReactElement } from 'react';

import './InputLabel.scss';

interface InputLabelProps {
    label: string;
    additionalLabel?: string;
    className?: string;
}

const InputLabel: FC<InputLabelProps> = ({
    label,
    additionalLabel,
    className = '',
}): ReactElement => (
    <div className={`input-label ${className}`}>
        {label}

        {additionalLabel && (
            <span className="input-label__additional-label">
                {additionalLabel}
            </span>
        )}
    </div>
);

export default InputLabel;
