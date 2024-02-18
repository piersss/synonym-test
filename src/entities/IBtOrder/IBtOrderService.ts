import { BlocktankClient, IBtOrder } from '@synonymdev/blocktank-lsp-http-client';

import { mockedIBtOrder } from '../../mock/IBtOrder';
import { IBtOrderFormData } from './IBtOrder';

const useMock = true;

const client = new BlocktankClient();

export const createOrderApiCall = async (formProps: IBtOrderFormData): Promise<IBtOrder | undefined> => {
    try {
        if (useMock) {
            return {
                ...mockedIBtOrder,
                id: crypto.randomUUID(),
                lspBalanceSat: formProps.lspBalanceSat,
                channelExpiryWeeks: formProps.expiryInWeeks,
            };
        }

        return await client.createOrder(formProps.lspBalanceSat, formProps.expiryInWeeks);
    } catch (e) {
        console.error(e);

        return undefined;
    }
};

export const getOrderApiCall = async (orderId: string): Promise<IBtOrder | undefined> => {
    try {
        if (useMock) {
            return mockedIBtOrder;
        }

        return await client.getOrder(orderId);
    } catch (e) {
        console.error(e);

        return undefined;
    }
};
