import React, { FC, ReactElement, useState } from 'react';

import ConnectedPayByNewChannel from '../../connectors/ConnectedPayByNewChannel/ConnectedPayByNewChannel';
import { PaymentMethod } from '../../types';
import PaymentTypeSelector from '../PaymentTypeSelector/PaymentTypeSelector';

import './Router.scss';

interface RouterProps {
    className?: string;
}

const Router: FC<RouterProps> = ({ className = '' }): ReactElement => {
    const [paymentType, setPaymentType] = useState(PaymentMethod.newChannel);

    return (
        <div className={`router ${className}`}>
            <PaymentTypeSelector value={paymentType} onChange={setPaymentType} />

            {paymentType === PaymentMethod.newChannel ? (
                <ConnectedPayByNewChannel />
        ) : (
            <div>Pay invoice</div>
        )}
        </div>
    );
};

export default Router;
