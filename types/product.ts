export interface Product {
  id: string
  name: string
  price: number
  image: string
}

export type Desk = Product
export type Chair = Product

export interface Accessory extends Product {
  type: 'monitor' | 'plant'
}