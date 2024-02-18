import { BlocktankClient, IBtOrder } from '@synonymdev/blocktank-lsp-http-client';
import { BtOrderState2 } from '@synonymdev/blocktank-lsp-http-client/dist/shared/BtOrderState2';

import { mockedIBtOrder } from '../../mock/IBtOrder';
import { IBtOrderFormData } from './IBtOrder';

const useMock = true;
let numberOfMockGetOrderCalls = 0;
const numberOfMockGetOrderCallsTarget = 3;

const client = new BlocktankClient();

export const createOrderApiCall = async (formProps: IBtOrderFormData): Promise<IBtOrder | undefined> => {
    try {
        if (useMock) {
            numberOfMockGetOrderCalls = 0;

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
            numberOfMockGetOrderCalls += 1;
            console.log(numberOfMockGetOrderCalls, numberOfMockGetOrderCallsTarget);
            const isCompleted = numberOfMockGetOrderCalls >= numberOfMockGetOrderCallsTarget;

            return {
                ...mockedIBtOrder,
                id: orderId,
                state2: isCompleted ? BtOrderState2.PAID : BtOrderState2.CREATED,
            };
        }

        return await client.getOrder(orderId);
    } catch (e) {
        console.error(e);

        return undefined;
    }
};
