import { FC, ReactElement } from 'react';

import ChannelInfoRow from './subcomponents/ChannelInfoRow/ChannelInfoRow';

interface ChannelInfoProps {
    capacity: string;
    expiryAmount: number | string;
    expiryUnit: string;
    initialBtcBalance: string;
    className?: string;
}

const ChannelInfo: FC<ChannelInfoProps> = ({
    capacity,
    expiryAmount,
    expiryUnit,
    initialBtcBalance,
    className = '',
}): ReactElement => (
    <div className={`channel-info ${className}`}>
        <ChannelInfoRow
            label="Total Capacity"
            value={capacity}
        />

        <ChannelInfoRow
            label="Initial BTC Balance"
            value={initialBtcBalance}
        />

        <ChannelInfoRow
            label="Channel expiry"
            value={`${expiryAmount} ${expiryUnit}`}
        />
    </div>
);

export default ChannelInfo;
