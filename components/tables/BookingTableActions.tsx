'use client'
import React from 'react'
import { TableCell } from '../ui/table'
import { Button } from '../ui/button'
import { BOOKING_STATUS, BookingListItem } from '@/types/booking.interface'
import { addCheckIn, addCheckOut, cancelBooking } from '@/lib/apis'
import { useRouter } from 'next/navigation'

const BookingTableActions = ({ booking }: { booking: BookingListItem }) => {
  const router = useRouter();

  const handleBookingAction = async (status: BOOKING_STATUS, bookingId: string) => {
    switch (status) {
      case BOOKING_STATUS.CHECKED_IN:
        await addCheckIn(bookingId, {
          actualCheckInDate: new Date()
        })
        break;
      case BOOKING_STATUS.CHECKED_OUT:
        await addCheckOut(bookingId, {
          actualCheckOutDate: new Date()
        })
        break;
      case BOOKING_STATUS.CANCELLED:
        await cancelBooking(bookingId)
        break;

      default:
        break;
    }

    router.refresh()
  }
  return (
    <TableCell className='flex gap-2'>
      {booking.status === BOOKING_STATUS.BOOKED && (
        <Button
          onClick={() => handleBookingAction(BOOKING_STATUS.BOOKED, booking._id)}
          className='bg-green-600 hover:green-700'>
          Check-In
        </Button>)}
      {booking.status === BOOKING_STATUS.CHECKED_IN &&
        <Button
          onClick={() => handleBookingAction(BOOKING_STATUS.CHECKED_IN, booking._id)}
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
