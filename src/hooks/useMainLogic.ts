export const useMainLogic = () => {
  type Dour = {
    count: number
    present: boolean
  }
  const arr = [
    { count: 0, present: true },
    { count: 1, present: false },
    { count: 2, present: false },
  ]
  function shuffle(array: Dour[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }
  shuffle(arr)
  console.log(arr)
  return null
}
