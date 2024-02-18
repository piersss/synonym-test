import { FC, ReactElement } from 'react';

import { IBtOrder } from '@synonymdev/blocktank-lsp-http-client';
import { BtOrderState2 } from '@synonymdev/blocktank-lsp-http-client/dist/shared/BtOrderState2';

import { IBtOrderFormData } from '../../entities/IBtOrder/IBtOrder';
import AwaitChannelPayment from '../AwaitChannelPayment/AwaitChannelPayment';
import PayByNewChannelForm from '../PayByNewChannelForm/PayByNewChannelForm';

interface OrderFlowProps {
    order?: IBtOrder;
    onBackButtonClick: () => void;
    onSubmit: (formData: IBtOrderFormData) => void;
    className?: string;
}

const OrderFlow: FC<OrderFlowProps> = ({
    order, onBackButtonClick, onSubmit, className = '',
}): ReactElement => {
    if (order?.state2 === BtOrderState2.CREATED) {
        return (
            <AwaitChannelPayment
                order={order}
                onBackButtonClick={onBackButtonClick}
                className={className}
            />
        );
    }

    if (order?.state2 === BtOrderState2.EXPIRED) {
        return (
            <>Expired screen</>
        );
    }

    return (
        <PayByNewChannelForm
            onSubmit={onSubmit}
            className={className}
        />
    );

    return (
        <div className={` ${className}`} />
    );
};

export default OrderFlow;
