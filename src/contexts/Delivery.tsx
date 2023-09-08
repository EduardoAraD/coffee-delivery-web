import { ReactNode, createContext, useReducer } from 'react'

import { createnewDeliveryAction } from '../reducers/Delivery/action'
import { DeliveryReducer } from '../reducers/Delivery/reducer'

import { Address } from '../Model/Address'
import { Payment } from '../Model/Payment'

export interface DeliveryData {
  address: Address
  estimatedTime: string
  payment: Payment
}

interface DeliveryContextType {
  delivery: DeliveryData
  createDelivery: (
    address: Address,
    payment: Payment,
    estimatedTime: string,
  ) => void
}

interface DeliveryProviderProps {
  children: ReactNode
}

export const DeliveryContext = createContext<DeliveryContextType>(
  {} as DeliveryContextType,
)

export function DeliveryProvider({ children }: DeliveryProviderProps) {
  const [delivery, dispatch] = useReducer(DeliveryReducer, {
    address: {
      cep: '',
      street: '',
      number: 0,
      city: '',
      district: '',
      complement: '',
      uf: '',
    },
    estimatedTime: '',
    payment: 'Money',
  })

  function createDelivery(
    address: Address,
    payment: Payment,
    estimatedTime: string,
  ) {
    dispatch(createnewDeliveryAction(address, payment, estimatedTime))
  }

  return (
    <DeliveryContext.Provider
      value={{
        delivery,
        createDelivery,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
