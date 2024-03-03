import { RootState } from '@/app/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { logout } from '../users/usersSlice'

interface IInitialState {
  isNeedSave: boolean
  isWantLogout: boolean
  formState: object | null
}

const initialState: IInitialState = {
  isNeedSave: false,
  isWantLogout: false,
  formState: null,
}

const slice = createSlice({
  name: 'formProfile',
  initialState,
  reducers: {
    setIsNeedSave: (state, { payload: { value } }: PayloadAction<{ value: boolean }>) => {
      return {
        ...state,
        isNeedSave: value,
      }
    },
    setIsWantLogout: (state, { payload: { value } }: PayloadAction<{ value: boolean }>) => {
      return {
        ...state,
        isWantLogout: value,
      }
    },
    setFormState: (
      state,
      { payload: { value } }: PayloadAction<{ value: Record<string, string> }>
    ) => {
      return {
        ...state,
        formState: value,
      }
    },
    notSave: state => {
      return {
        ...state,
        formState: null,
        isNeedSave: false,
        isWantLogout: false,
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(logout.type, state => {
      return {
        ...state,
        formState: null,
        isNeedSave: false,
        isWantLogout: false,
      }
    })
  },
})

export const { setIsNeedSave, setIsWantLogout, setFormState, notSave } = slice.actions
export default slice.reducer

export const selectIsNeedSave = (state: RootState) => state.formProfile.isNeedSave
export const selectIsWantLogout = (state: RootState) => state.formProfile.isWantLogout
export const selectFormState = (state: RootState) => state.formProfile.formState
