/* eslint-disable max-len */

import {
    BtBolt11PaymentState,
    BtPaymentState,
    IBtBolt11Invoice,
    IBtOrder,
    IBtPayment,
} from '@synonymdev/blocktank-lsp-http-client';
import { BtOrderState } from '@synonymdev/blocktank-lsp-http-client/dist/shared/BtOrderState';
import { BtOrderState2 } from '@synonymdev/blocktank-lsp-http-client/dist/shared/BtOrderState2';
import { BtPaymentState2 } from '@synonymdev/blocktank-lsp-http-client/dist/shared/BtPaymentState2';
import { ILspNode } from '@synonymdev/blocktank-lsp-http-client/dist/shared/ILspNode';

const iLspNode: ILspNode = {
    alias: 'alias',
    pubkey: '02b4632d08485ff1df2db55b9dafd23347d1c47a457072a1e87be26896549a8737',
    connectionStrings: [],
};

const mockedBolt11Invoice: IBtBolt11Invoice = {
    request: 'lnbc1pvjluezpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdpl2pkx2ctnv5sxxmmfd9sjqctpv4rzjqw4wtyq58nxy6t5wvsycnjzpsy8z3r2pshjmt9de6zqmt9a3kk2mctpv5h82a6hhg6twvu8n8tjzmf85t6x8un9ypsxpp3z56wmm5ypxxjemgw3hxjmn8yptk7untd9hxwg3q2d6xjcmtv4ezq7pqxgsxq97zvu7a0',
    state: BtBolt11PaymentState.INFLIGHT,
    expiresAt: '2024-12-31T23:59:59.999Z',
    updatedAt: '2024-12-31T23:59:59.999Z',
};

const mockedPayment: IBtPayment = {
    state: BtPaymentState.CREATED,
    state2: BtPaymentState2.CREATED,
    paidSat: 1000,
    bolt11Invoice: mockedBolt11Invoice,
    onchain: {
        address: '3D2oetdNuZUqQHPJmcMDDHYoqkyNVsFk9r',
        confirmedSat: 1000,
        requiredConfirmations: 6,
        transactions: [],
    },
    isManuallyPaid: false,
};

export const mockedIBtOrder: IBtOrder = {
    id: crypto.randomUUID(),
    state: BtOrderState.CREATED,
    state2: BtOrderState2.CREATED,
    feeSat: 5,
    lspBalanceSat: 1000,
    clientBalanceSat: 1000,
    zeroConf: true,
    zeroReserve: true,
    channelExpiryWeeks: 2,
    channelExpiresAt: '2024-12-31T23:59:59.999Z',
    orderExpiresAt: '2024-12-31T23:59:59.999Z',
    // channel,
    lspNode: iLspNode,
    lnurl: 'lightning:lnurl1dp68gurn8ghj7ct5mrwvf0hx',
    payment: mockedPayment,
    couponCode: 'couponCode',
    discountPercent: 10,
    updatedAt: '2024-12-31T23:59:59.999Z',
    createdAt: '2024-12-31T23:59:59.999Z',
};

/* eslint-enable max-len */
