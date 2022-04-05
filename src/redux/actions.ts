export const submitBookingTourAction =(data) => {
  return {
    type: 'bookingTour/submitBooking',
    payload: data
  }
}