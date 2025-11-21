'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../ui/button'
import { BOOKING_STATUS } from '@/types/booking.interface'

const BG_COLORS = {
    "booked": "bg-blue-600 hover:bg-blue-700",
    "checkedIn": "bg-green-600 hover:bg-green-700",
    "checkedOut": "bg-amber-600 hover:bg-amber-700",
    "cancelled": "bg-red-600 hover:bg-red-700",
}

const BookingTableFilters = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const onClickStatus = (status: BOOKING_STATUS) => {
        const params = new URLSearchParams(searchParams);
        if (status) {
            params.set('status', status);
        } else {
            params.delete('status');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className='flex gap-1'>
            {
                Object.values(BOOKING_STATUS).map(status => (
                    <Button
                        key={status}
                        onClick={() => onClickStatus(status)}
                        className={`${BG_COLORS[status]} trnsition-colors duration-300 ease-in-out`}>
                        {status}
                    </Button>
                ))
            }
        </div>
    )
}

export default BookingTableFilters
