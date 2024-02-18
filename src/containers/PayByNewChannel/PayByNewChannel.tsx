import { FC, ReactElement } from 'react';

interface PayByNewChannelProps {
    className?: string;
}

const PayByNewChannel: FC<PayByNewChannelProps> = ({ className = '' }): ReactElement => (
    <div className={`pay-by-new-channel ${className}`}>
        pay-by-new-channel
    </div>
);

export default PayByNewChannel;
