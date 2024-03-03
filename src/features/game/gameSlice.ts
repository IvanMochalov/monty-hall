import { TDoor } from '@/type'
import { IInitialState, RootState } from '@/app/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useMainLogic } from '@/hooks/useMainLogic'

const { doorList } = useMainLogic()

const initialState: IInitialState = {
  doors: doorList,
}

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setDoors: (state, { payload: { value } }: PayloadAction<{ value: TDoor[] }>) => {
      return {
        ...state,
        doors: value,
      }
    },
    selectedDoor: (state, { payload: { value } }: PayloadAction<{ value: number }>) => {
      return {
        ...state,
        doors: state.doors.map(item => {
          return { ...item, isSelected: item.count === value ? true : false }
        }),
      }
    },
  },
})

export const { setDoors, selectedDoor } = slice.actions
export default slice.reducer

export const selectDoors = (state: RootState) => state.game.doors
