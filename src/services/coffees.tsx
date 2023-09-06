import { Coffee } from '../Model/Coffee'

import expressoTradicionalPng from '../assets/coffeeExpressoTradicional.png'
import expressoAmericanoPng from '../assets/coffeeExpressoAmericano.png'
import expressoCremosoPng from '../assets/coffeeExpressoCremoso.png'
import expressoGeladoPng from '../assets/coffeeExpressoGelado.png'
import cafeComLeitePng from '../assets/coffeeCafeComLeite.png'
import lattePng from '../assets/coffeeLatte.png'
import capuccinoPng from '../assets/coffeeCapuccino.png'
import macchiatoPng from '../assets/coffeeMacchiato.png'
import mocaccinoPng from '../assets/coffeeMacaccino.png'
import chocolateQuentePng from '../assets/coffeeCholocateQuente.png'
import cubanoPng from '../assets/coffeeCubano.png'
import havaianoPng from '../assets/coffeeHavaiano.png'
import arabePng from '../assets/coffeeArabe.png'
import irlandesPng from '../assets/coffeeIrlandes.png'

export const Coffees: Coffee[] = [
  {
    description: 'O tradicional café feito com água quente e grãos moídos',
    id: '1',
    image: expressoTradicionalPng,
    name: 'Expresso Tradicional',
    price: 9.9,
    type: ['TRADICIONAL'],
  },
  {
    description: 'Expresso diluído, menos intenso que o tradicional',
    id: '2',
    image: expressoAmericanoPng,
    name: 'Expresso Americano',
    price: 9.9,
    type: ['TRADICIONAL'],
  },
  {
    description: 'Café expresso tradicional com espuma cremosa',
    id: '3',
    image: expressoCremosoPng,
    name: 'Expresso Cremoso',
    price: 9.9,
    type: ['TRADICIONAL'],
  },
  {
    description: 'Bebida preparada com café expresso e cubos de gelo',
    id: '4',
    image: expressoGeladoPng,
    name: 'Expresso Gelado',
    price: 9.9,
    type: ['TRADICIONAL', 'GELADO'],
  },
  {
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    id: '5',
    image: cafeComLeitePng,
    name: 'Café com Leite',
    price: 9.9,
    type: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    id: '6',
    image: lattePng,
    name: 'Latte',
    price: 9.9,
    type: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    id: '7',
    image: capuccinoPng,
    name: 'Capuccino',
    price: 9.9,
    type: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    id: '8',
    image: macchiatoPng,
    name: 'Macchiato',
    price: 9.9,
    type: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    id: '9',
    image: mocaccinoPng,
    name: 'Mocaccino',
    price: 9.9,
    type: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    id: '10',
    image: chocolateQuentePng,
    name: 'Chocolate Quente',
    price: 9.9,
    type: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    id: '11',
    image: cubanoPng,
    name: 'Cubano',
    price: 9.9,
    type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
  },
  {
    description: 'Bebida adocicada preparada com café e leite de coco',
    id: '12',
    image: havaianoPng,
    name: 'Havaiano',
    price: 9.9,
    type: ['ESPECIAL'],
  },
  {
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    id: '13',
    image: arabePng,
    name: 'Árabe',
    price: 9.9,
    type: ['ESPECIAL'],
  },
  {
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    id: '14',
    image: irlandesPng,
    name: 'Irlandês',
    price: 9.9,
    type: ['ESPECIAL', 'ALCOÓLICO'],
  },
]
