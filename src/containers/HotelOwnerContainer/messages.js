/*
 * Header Messages
 *
 * This contains all the text for the Header container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HotelOwnerContainer';

export default defineMessages({
  invoice: {
    id: `${scope}.invoice`,
    defaultMessage: 'Invoice Report'
  },
  add_hotel: {
    id: `${scope}.add_hotel`,
    defaultMessage: 'Add Hotel'
  },
  rooms: {
    id: `${scope}.rooms`,
    defaultMessage: 'Rooms'
  },
  reservations: {
    id: `${scope}.reservations`,
    defaultMessage: 'Reservations'
  },
  profile: {
    id: `${scope}.profile`,
    defaultMessage: 'Hotel Profile'
  },
  policies: {
    id: `${scope}.policies`,
    defaultMessage: 'Policies'
  },
  facilities: {
    id: `${scope}.facilities`,
    defaultMessage: 'Facilities'
  },
  }
);
