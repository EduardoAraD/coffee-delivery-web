import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { IconTitleSubtitle } from '../../../../components/IconTitleSubtitle'

import { FormContainer, Input } from './styles'

export function FormAddress() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <IconTitleSubtitle
        icon={MapPinLine}
        colorIcon="YELLOW_DARK"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        title="Endereço de Entrega"
      />
      <div className="form">
        <Input
          className="form-curt"
          placeholder="CEP"
          id="cep"
          {...register('cep')}
        />
        <Input id="street" placeholder="Rua" {...register('street')} />
        <div>
          <Input
            className="form-curt"
            placeholder="Número"
            id="number"
            type="number"
            {...register('number', { valueAsNumber: true })}
          />
          <div className="input-div">
            <Input
              placeholder="Complemento"
              id="complement"
              {...register('complement')}
            />
            <span>Opcional</span>
          </div>
        </div>
        <div>
          <Input
            className="form-curt"
            placeholder="Bairro"
            id="district"
            {...register('district')}
          />
          <Input placeholder="Cidade" id="city" {...register('city')} />
          <Input
            className="form-x-curt"
            placeholder="UF"
            list="uf-suggestions"
            id="uf"
            maxLength={2}
            {...register('uf')}
          />
          <datalist id="uf-suggestions">
            <option value="AC" />
            <option value="AL" />
            <option value="AM" />
            <option value="AP" />
            <option value="BA" />
            <option value="CE" />
            <option value="DF" />
            <option value="ES" />
            <option value="GO" />
            <option value="MA" />
            <option value="MG" />
            <option value="MS" />
            <option value="MT" />
            <option value="PA" />
            <option value="PB" />
            <option value="PE" />
            <option value="PI" />
            <option value="PR" />
            <option value="RJ" />
            <option value="RN" />
            <option value="RO" />
            <option value="RR" />
            <option value="RS" />
            <option value="SC" />
            <option value="SE" />
            <option value="SP" />
            <option value="TO" />
          </datalist>
        </div>
      </div>
    </FormContainer>
  )
}
