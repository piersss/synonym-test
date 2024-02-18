import { FC, ReactElement } from 'react';

import { IBtOrder } from '@synonymdev/blocktank-lsp-http-client';
import { IoChevronBack } from 'react-icons/io5';
import QRCode from 'react-qr-code';

import Button from '../../../../components/Button/Button';

import './ConfirmedChannelPayment.scss';

interface ChannelPaymentProps {
    order: IBtOrder;
    onBackButtonClick: () => void;
    className?: string;
}

const ConfirmedChannelPayment: FC<ChannelPaymentProps> = ({ order, onBackButtonClick, className = '' }): ReactElement => {
    const { payment } = order;

    return (
        <div className={`confirmed-channel-payment ${className}`}>
            <Button
                onClick={onBackButtonClick}
                className="confirmed-channel-payment__back-button"
            >
                <IoChevronBack />
                Go back
            </Button>

            <QRCode
                value={payment.bolt11Invoice.request || payment.onchain.address}
                className="confirmed-channel-payment__qr-code"
            />

            <div className="confirmed-channel-payment__status">Payment confirmed</div>
        </div>
    );
};

export default ConfirmedChannelPayment;
