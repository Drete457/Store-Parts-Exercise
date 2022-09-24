import { memo } from 'react';
import { downArrow, upArrow } from '@/assets';

interface OrderDirectionImageProps {
    orderDirection: boolean;
}

const OrderDirectionImage: React.FC<OrderDirectionImageProps> = ({
    orderDirection,
}) => {
    return (
        <img
            src={orderDirection ? downArrow : upArrow}
            alt="Arrow order direction"
            className="w-6 h-6 "
        />
    );
};

export default memo(OrderDirectionImage);
