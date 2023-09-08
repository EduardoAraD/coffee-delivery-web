import { useContext } from 'react'

import { DeliveryContext } from '../contexts/Delivery'

export function useDelivery() {
  return useContext(DeliveryContext)
}
