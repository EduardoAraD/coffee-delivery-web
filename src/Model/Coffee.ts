type TypeCoffee =
  | 'TRADICIONAL'
  | 'DOCE'
  | 'ESPECIAL'
  | 'COM LEITE'
  | 'ALCOÓLICO'
  | 'GELADO'

export interface Coffee {
  id: string
  name: string
  description: string
  type: TypeCoffee[]
  price: number
  image: string
}
