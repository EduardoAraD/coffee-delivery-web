import { Address } from '../../Model/Address'
import { Payment } from '../../Model/Payment'

export enum DeliveryActionType {
  CREATE_NEW_DELIVERY = 'CREATE_NEW_DELIVERY',
}

export function createnewDeliveryAction(
  address: Address,
  payment: Payment,
  estimatedTime: string,
) {
  return {
    type: DeliveryActionType.CREATE_NEW_DELIVERY,
    payload: {
      address,
      payment,
      estimatedTime,
    },
  }
}
