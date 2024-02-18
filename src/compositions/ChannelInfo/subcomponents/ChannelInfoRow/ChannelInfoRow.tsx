import { FC, ReactElement } from 'react';

import './ChannelInfoRow.scss';

interface ChannelInfoRowProps {
    label: string;
    value: string | number;
    className?: string;
}

const ChannelInfoRow: FC<ChannelInfoRowProps> = ({ label, value, className = '' }): ReactElement => (
    <div className={`channel-info-row ${className}`}>
        <div className="channel-info-row__label">
            {label}
        </div>
        <div className="channel-info-row__value">
            {value}
        </div>
    </div>
);

export default ChannelInfoRow;
