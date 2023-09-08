import { produce } from 'immer'

import { DeliveryActionType } from './action'

import { DeliveryData } from '../../contexts/Delivery'

export function DeliveryReducer(state: DeliveryData, action: any) {
  switch (action.type) {
    case DeliveryActionType.CREATE_NEW_DELIVERY: {
      return produce(state, (draft) => {
        draft.address = action.payload.address
        draft.payment = action.payload.payment
        draft.estimatedTime = action.payload.estimatedTime
      })
    }

    default:
      return state
  }
}
