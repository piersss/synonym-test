import { FC, ReactElement } from 'react';

import './ErrorLabel.scss';

interface ErrorLabelProps {
    text: string;
    className?: string;
}

const ErrorLabel: FC<ErrorLabelProps> = ({ text, className = '' }): ReactElement => (
    <div className={`error-label ${className}`}>
        {text}
    </div>
);

export default ErrorLabel;
