import {
    FC,
    FormEvent,
    ReactElement,
    useState,
} from 'react';

import Button from '../../components/Button/Button';
import NumberInput from '../../compositions/NumberInput/NumberInput';
import { getFormErrorsLength } from '../../entities/FormValidation/FormValidationService';
import { IBtOrderFormData } from '../../entities/IBtOrder/IBtOrder';
import { IBtOrderFormErrors, validatePayByNewChannelFormData } from './helpers';

import './PayByNewChannelForm.scss';

interface PayByNewChannelProps {
    onSubmit: (formData: IBtOrderFormData) => void;
    className?: string;
}

const PayByNewChannelForm: FC<PayByNewChannelProps> = ({ onSubmit, className = '' }): ReactElement => {
    const [capacity, setCapacity] = useState(0);
    const [errors, setErrors] = useState<IBtOrderFormErrors>({});

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formErrors = validatePayByNewChannelFormData({
            expiryInWeeks: 10,
            lspBalanceSat: capacity,
        });

        if (getFormErrorsLength(formErrors)) {
            setErrors(formErrors);

            return;
        }

        onSubmit({
            expiryInWeeks: 10,
            lspBalanceSat: capacity * 100000,
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
                error={errors.lspBalanceSat}
                tooltip="The capacity of the channel in satoshis. The maximum amount of satoshis that can be sent through the channel."
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
