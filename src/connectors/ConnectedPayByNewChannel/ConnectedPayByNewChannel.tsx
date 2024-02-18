import {
    FC,
    ReactElement,
    useEffect,
    useState,
} from 'react';

import { IBtOrder } from '@synonymdev/blocktank-lsp-http-client';
import { BtOrderState2 } from '@synonymdev/blocktank-lsp-http-client/dist/shared/BtOrderState2';
import { noop } from 'react-use/lib/misc/util';

import OrderFlow from '../../containers/OrderFlow/OrderFlow';
import { IBtOrderFormData } from '../../entities/IBtOrder/IBtOrder';
import { createOrderApiCall, getOrderApiCall } from '../../entities/IBtOrder/IBtOrderService';

const ConnectedPayByNewChannel: FC = (): ReactElement => {
    const [order, setOrder] = useState<IBtOrder | undefined>();

    const handleSubmit = async (formData: IBtOrderFormData) => {
        const response = await createOrderApiCall(formData);

        if (response !== undefined) {
            setOrder(response);
        }
    };

    const handleBackButtonClick = () => {
        setOrder(undefined);
    };

    useEffect((): () => void => {
        if (!order) {
            return noop;
        }

        let intervalId: NodeJS.Timeout;
        const fetchOrderInterval = 1000;

        const fetchOrder = async () => {
            const response = await getOrderApiCall(order?.id);

            if (response !== undefined) {
                setOrder(response);
            }
        };

        if (order.state2 === BtOrderState2.CREATED) {
            fetchOrder();
            intervalId = setInterval(fetchOrder, fetchOrderInterval);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [order?.state2]);

    return (
        <OrderFlow
            order={order}
            onBackButtonClick={handleBackButtonClick}
            onSubmit={handleSubmit}
        />
    );
};

export default ConnectedPayByNewChannel;
