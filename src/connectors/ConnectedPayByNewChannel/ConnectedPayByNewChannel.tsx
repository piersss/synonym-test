import {
    FC,
    ReactElement,
    useEffect,
    useState,
} from 'react';

import { IBtOrder } from '@synonymdev/blocktank-lsp-http-client';

import ChannelPayment from '../../containers/ChannelPayment/ChannelPayment';
import PayByNewChannelForm from '../../containers/PayByNewChannelForm/PayByNewChannelForm';
import { IBtOrderFormData } from '../../entities/IBtOrder/IBtOrder';
import { createOrderApiCall } from '../../entities/IBtOrder/IBtOrderService';

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

    useEffect(() => {
        if (order?.id) {
            
            console.log(order?.id);
            // Poll for update using order.id
        }
    }, [order?.id]);

    if (order) {
        return (
            <ChannelPayment
                order={order}
                onBackButtonClick={handleBackButtonClick}
            />
        );
    }

    return (
        <PayByNewChannelForm onSubmit={handleSubmit} />
    );
};

export default ConnectedPayByNewChannel;
