import { CartItem } from './cartItem'

export type Cart = {
  id: number
  status: string
  userId: number
  products: CartItem[]
}
