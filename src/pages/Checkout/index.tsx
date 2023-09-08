import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useDelivery } from '../../hooks/Delivery'
import { useShoppingCart } from '../../hooks/ShoppingCart'

import { Address } from '../../Model/Address'
import { Payment } from '../../Model/Payment'

import { Button } from '../../components/Button'
import { ButtonWithIcon } from '../../components/ButtonWithIcon'
import { CardItemCoffee } from '../../components/CardItemCoffee'
import { IconTitleSubtitle } from '../../components/IconTitleSubtitle'
import { LabelPrice } from '../../components/LabelPrice'
import { TitleContent } from '../../components/TitleContent'

import { FormAddress } from './components/FormAddress'

import { CheckoutContainer, Line } from './styles'

const newAddressFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.number().min(1, 'Informe o número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe a UF do estado'),
})

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>
type OptionPayment = Payment

export function Checkout() {
  const navigate = useNavigate()
  const { shoppingCart } = useShoppingCart()
  const { createDelivery } = useDelivery()

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      district: '',
      number: 0,
      street: '',
      uf: '',
    },
  })
  const [payment, setPayment] = useState<OptionPayment | ''>('')

  const { handleSubmit } = newAddressForm

  function handleSetPayment(value: OptionPayment) {
    if (payment === value) {
      setPayment('')
    } else {
      setPayment(value)
    }
  }

  function handleCreateAddressWithProduct(data: NewAddressFormData) {
    if (payment === '') {
      return
    }
    const newAddress: Address = {
      cep: data.cep,
      city: data.city,
      complement: data.complement,
      district: data.district,
      number: data.number,
      street: data.street,
      uf: data.uf,
    }

    const estimatedTime = '20min até 30min'

    createDelivery(newAddress, payment, estimatedTime)
    navigate('/sucesso')
  }

  const initialValue = 0
  const priceAllItens = shoppingCart.reduce(
    (accumulate, itemShop) =>
      accumulate + itemShop.amount * itemShop.coffee.price,
    initialValue,
  )

  const priceDelivery = 3.5
  const priceTotal = priceAllItens + priceDelivery

  const disabledButton = shoppingCart.length === 0 || payment === ''

  return (
    <CheckoutContainer>
      {/* <form onSubmit={handleSubmit(handleSubmitForm)} action=""> */}
      <form onSubmit={handleSubmit(handleCreateAddressWithProduct)} action="">
        <div style={{ flex: 3 }}>
          <TitleContent title="Complete seu pedido">
            <FormProvider {...newAddressForm}>
              <FormAddress />
            </FormProvider>
            <div className="contentForm">
              <IconTitleSubtitle
                icon={CurrencyDollar}
                colorIcon="PURPLE"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                title="Pagamento"
              />
              <div className="options">
                <ButtonWithIcon
                  icon={CreditCard}
                  title="Cartão de Crédito"
                  selected={payment === 'CreditCart'}
                  onClick={() => handleSetPayment('CreditCart')}
                />
                <ButtonWithIcon
                  icon={Bank}
                  title="Cartão de Débito"
                  selected={payment === 'Bank'}
                  onClick={() => handleSetPayment('Bank')}
                />
                <ButtonWithIcon
                  icon={Money}
                  title="Dinheiro"
                  selected={payment === 'Money'}
                  onClick={() => handleSetPayment('Money')}
                />
              </div>
            </div>
          </TitleContent>
        </div>
        <div style={{ flex: 2 }}>
          <TitleContent title="Cafés selecionados">
            <div className="contentForm">
              <div className="itensPrice">
                {shoppingCart.map((item) => (
                  <Fragment key={item.coffee.id}>
                    <CardItemCoffee itemCoffee={item} />
                    <Line />
                  </Fragment>
                ))}
                <div className="infoPrice">
                  <LabelPrice label="Total de Itens" price={priceAllItens} />
                  <LabelPrice label="Entrega" price={priceDelivery} />
                  <LabelPrice label="Total" price={priceTotal} isBold />
                </div>
                <Button
                  type="submit"
                  title="CONFIRMAR PEDIDO"
                  disabled={disabledButton}
                />
              </div>
            </div>
          </TitleContent>
        </div>
      </form>
    </CheckoutContainer>
  )
}
