'use client'
import { TableCell } from '../ui/table'
import { Button } from '../ui/button'
import { BOOKING_STATUS, BookingListItem } from '@/types/booking.interface'
import { addCheckIn, addCheckOut, cancelBooking } from '@/lib/apis'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const BookingTableActions = ({ booking }: { booking: BookingListItem }) => {
  const router = useRouter();

  const handleBookingAction = async (status: BOOKING_STATUS, bookingId: string) => {
    let response;
    try {
      switch (status) {
        case BOOKING_STATUS.CHECKED_IN:
          response = await addCheckIn(bookingId, {
            actualCheckInDate: new Date()
          })
          break;
        case BOOKING_STATUS.CHECKED_OUT:
          response = await addCheckOut(bookingId, {
            actualCheckOutDate: new Date()
          })
          break;
        case BOOKING_STATUS.CANCELLED:
          response = await cancelBooking(bookingId)
          break;

        default:
          break;
      }

      if (!response?.data) return

      const message = response?.data?.message
      if (message) toast.info(message)
      router.refresh()
    } catch (error: unknown) {
      console.error(error);

      let errorMessage = "Error while updating status";

      if (error instanceof Error) {
        errorMessage = error.message;

      } else if (typeof error === "object" && error !== null && "response" in error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        errorMessage = error.response?.data?.message || errorMessage;
      }

      toast.error(errorMessage);
      console.log("errorMessage: ", errorMessage)
    }
  }

  return (
    <TableCell className='flex gap-2'>
      {booking.status === BOOKING_STATUS.BOOKED && (
        <Button
          onClick={() => handleBookingAction(BOOKING_STATUS.CHECKED_IN, booking._id)}
          className='bg-green-600 hover:green-700'>
          Check-In
        </Button>)}
      {booking.status === BOOKING_STATUS.CHECKED_IN &&
        <Button
          onClick={() => handleBookingAction(BOOKING_STATUS.CHECKED_OUT, booking._id)}
          className='bg-amber-600 hover:amber-700'>
          Check-Out
        </Button>}
      {booking.status === BOOKING_STATUS.BOOKED &&
        <Button
          onClick={() => handleBookingAction(BOOKING_STATUS.CANCELLED, booking._id)}
          variant={'destructive'}>
          Cancel
        </Button>}
    </TableCell>
  )
}

export default BookingTableActions
