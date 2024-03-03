import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import game from '../features/game/gameSlice'
import { TDoor } from '@/type'

export interface IInitialState {
  doors: TDoor[]
}

export const store = configureStore({
  reducer: { game },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
