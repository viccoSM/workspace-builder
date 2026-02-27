import { Desk, Chair, Accessory } from '@/types/product'

interface Params {
  desk: Desk | null
  chair: Chair | null
  accessories: Accessory[]
}

export const calculateTotal = ({
  desk,
  chair,
  accessories,
}: Params) => {
  const deskPrice = desk?.price ?? 0
  const chairPrice = chair?.price ?? 0
  const accessoriesTotal = accessories.reduce(
    (sum, item) => sum + item.price,
    0
  )

  return deskPrice + chairPrice + accessoriesTotal
}