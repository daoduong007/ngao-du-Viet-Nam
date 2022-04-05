import {IInitState} from '@interfaces'

const initState : IInitState = {
  bookingTour: {
    idTour: 0,
  }
}

export const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case 'bookingTour/submitBooking':
      return {
        ...state,
        bookingTour: {
          idTour: action.payload.idTour,
        }
      }

   default: return state;
  }
}
