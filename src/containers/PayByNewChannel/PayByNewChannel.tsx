import { FC, ReactElement, useState } from 'react';

import NumberInput from '../../compositions/NumberInput/NumberInput';

interface PayByNewChannelProps {
    className?: string;
}

const PayByNewChannel: FC<PayByNewChannelProps> = ({ className = '' }): ReactElement => {
    const [capacity, setCapacity] = useState(0);

    return (
        <form className={`pay-by-new-channel ${className}`}>
            <NumberInput
                label="Capacity"
                value={capacity}
                onChange={setCapacity}
            />
        </form>
    );
};

export default PayByNewChannel;
