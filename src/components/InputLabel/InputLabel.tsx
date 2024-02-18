import { FC, ReactElement } from 'react';

import { IoIosInformationCircle } from 'react-icons/io';

import './InputLabel.scss';

interface InputLabelProps {
    label: string;
    tooltip?: string;
    className?: string;
}

const InputLabel: FC<InputLabelProps> = ({
    label,
    tooltip,
    className = '',
}): ReactElement => (
    <div className={`input-label ${className}`}>
        {label}

        {tooltip && (
            <IoIosInformationCircle className="input-label__tooltip" />
        )}
    </div>
);

export default InputLabel;
