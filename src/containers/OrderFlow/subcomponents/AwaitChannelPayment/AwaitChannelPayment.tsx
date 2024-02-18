import { FC, ReactElement } from 'react';

import { IBtOrder } from '@synonymdev/blocktank-lsp-http-client';
import { IoChevronBack } from 'react-icons/io5';
import QRCode from 'react-qr-code';

import Button from '../../../../components/Button/Button';
import ChannelInfo from '../../../../compositions/ChannelInfo/ChannelInfo';
import { ExpiryTimeUnit } from '../../../../types';

import './AwaitChannelPayment.scss';

interface ChannelPaymentProps {
    order: IBtOrder;
    onBackButtonClick: () => void;
    className?: string;
}

const AwaitChannelPayment: FC<ChannelPaymentProps> = ({ order, onBackButtonClick, className = '' }): ReactElement => {
    const { payment } = order;

    return (
        <div className={`await-channel-payment ${className}`}>
            <Button
                onClick={onBackButtonClick}
                className="await-channel-payment__back-button"
            >
                <IoChevronBack />
                Go back
            </Button>

            <QRCode
                value={payment.bolt11Invoice.request || payment.onchain.address}
                className="await-channel-payment__qr-code"
            />

            <ChannelInfo
                capacity={`${order.lspBalanceSat} ₿`}
                expiryAmount="?"
                expiryUnit={ExpiryTimeUnit.weeks}
                initialBtcBalance={`${order.lspBalanceSat} ₿`}
                className="await-channel-payment__channel-info"
            />

            <div className="await-channel-payment__status">Awaiting payment (wait 5 seconds)</div>
        </div>
    );
};

export default AwaitChannelPayment;
