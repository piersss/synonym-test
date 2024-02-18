import {
    FC,
    FormEvent,
    ReactElement,
    useState,
} from 'react';

import Button from '../../components/Button/Button';
import NumberInput from '../../compositions/NumberInput/NumberInput';
import { IBtOrderFormData } from '../../entities/IBtOrder/IBtOrder';

import './PayByNewChannelForm.scss';

interface PayByNewChannelProps {
    onSubmit: (formData: IBtOrderFormData) => void;
    className?: string;
}

const PayByNewChannelForm: FC<PayByNewChannelProps> = ({ onSubmit, className = '' }): ReactElement => {
    const [capacity, setCapacity] = useState(0);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit({
            lspBalanceSat: capacity * 100000,
            expiryInWeeks: 10,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`pay-by-new-channel-form ${className}`}
        >
            <NumberInput
                label="Capacity"
                value={capacity}
                onChange={setCapacity}
            />

            <Button
                text="Submit"
                type="submit"
                className="pay-by-new-channel-form__submit-button"
            />
        </form>
    );
};

export default PayByNewChannelForm;
