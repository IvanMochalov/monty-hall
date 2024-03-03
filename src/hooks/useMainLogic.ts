import { TDoor } from '@/type'

export const useMainLogic = () => {
  const data = [
    { count: 0, present: true, isSelected: false, isOpen: false },
    { count: 1, present: false, isSelected: false, isOpen: false },
    { count: 2, present: false, isSelected: false, isOpen: false },
  ]
  const getShuffle = (array: TDoor[]) => {
    const newArr = array.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
    }
    return newArr
  }

  const doorList = getShuffle(data)

  return { doorList }
}
