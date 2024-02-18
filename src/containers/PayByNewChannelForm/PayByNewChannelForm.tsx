import {
    FC,
    FormEvent,
    ReactElement, useEffect,
    useRef,
    useState,
} from 'react';

import Button from '../../components/Button/Button';
import ChannelInfo from '../../compositions/ChannelInfo/ChannelInfo';
import NumberInput from '../../compositions/NumberInput/NumberInput';
import SelectExpiry from '../../compositions/SelectExpiry/SelectExpiry';
import { getFormErrorsLength } from '../../entities/FormValidation/FormValidationService';
import { IBtOrderFormData } from '../../entities/IBtOrder/IBtOrder';
import { getExpiryInWeeks } from '../../helpers/expiry';
import { ExpiryTimeUnit } from '../../types';
import { IBtOrderFormErrors, validatePayByNewChannelFormData } from './helpers';

import './PayByNewChannelForm.scss';

interface PayByNewChannelProps {
    onSubmit: (formData: IBtOrderFormData) => void;
    className?: string;
}

const PayByNewChannelForm: FC<PayByNewChannelProps> = ({ onSubmit, className = '' }): ReactElement => {
    const capacityInputRef = useRef<HTMLInputElement>(null);

    const [capacity, setCapacity] = useState<number>();
    const [timeUnit, setTimeUnit] = useState<ExpiryTimeUnit>(ExpiryTimeUnit.days);
    const [timeUnitAmount, setTimeUnitAmount] = useState<number>();
    const [errors, setErrors] = useState<IBtOrderFormErrors>({});

    const canSubmit = !!(capacity && timeUnitAmount);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formErrors = validatePayByNewChannelFormData(capacity, timeUnitAmount);

        if (getFormErrorsLength(formErrors)) {
            setErrors(formErrors);

            return;
        }

        onSubmit({
            expiryInWeeks: getExpiryInWeeks(timeUnitAmount || 1, timeUnit),
            lspBalanceSat: capacity || 0,
        });
    };

    useEffect(() => {
        if (capacityInputRef.current) {
            capacityInputRef.current.focus();
        }
    }, [capacityInputRef]);

    return (
        <form
            onSubmit={handleSubmit}
            className={`pay-by-new-channel-form ${className}`}
        >
            <NumberInput
                label="Capacity"
                value={capacity || ''}
                error={errors.capacity}
                tooltip="The capacity of the channel in satoshis. The maximum amount of satoshis that can be sent through the channel."
                ref={capacityInputRef}
                onChange={setCapacity}
            />

            <SelectExpiry
                amount={timeUnitAmount}
                timeUnit={timeUnit}
                error={errors.timeUnitAmount}
                onAmountChange={setTimeUnitAmount}
                onTimeUnitChange={setTimeUnit}
            />

            {!!(capacity && timeUnitAmount) && (
                <ChannelInfo
                    capacity={`${capacity} ₿`}
                    expiryAmount={timeUnitAmount}
                    expiryUnit={timeUnit}
                    initialBtcBalance={`${capacity} ₿`}
                />
            )}

            <Button
                disabled={!canSubmit}
                text="Submit"
                type="submit"
                className="pay-by-new-channel-form__submit-button"
            />
        </form>
    );
};

export default PayByNewChannelForm;
