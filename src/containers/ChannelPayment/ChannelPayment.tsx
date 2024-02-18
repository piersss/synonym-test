import { FC, ReactElement } from 'react';

import { IBtOrder } from '@synonymdev/blocktank-lsp-http-client';
import { IoChevronBack } from 'react-icons/io5';
import QRCode from 'react-qr-code';

import Button from '../../components/Button/Button';

import './ChannelPayment.scss';

interface ChannelPaymentProps {
    order: IBtOrder;
    onBackButtonClick: () => void;
    className?: string;
}

const ChannelPayment: FC<ChannelPaymentProps> = ({ order, onBackButtonClick, className = '' }): ReactElement => {
    const { payment } = order;

    return (
        <div className={`channel-payment ${className}`}>
            <Button
                onClick={onBackButtonClick}
                className="channel-payment__back-button"
            >
                <IoChevronBack />
                Go back
            </Button>

            <QRCode
                value={payment.bolt11Invoice.request || payment.onchain.address}
                className="channel-payment__qr-code"
            />
        </div>
    );
};

export default ChannelPayment;