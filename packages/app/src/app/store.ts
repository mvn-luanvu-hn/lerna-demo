import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { permissionsReducer } from '@luanvuvt/react-shared/permissions'

export const store = configureStore({
  reducer: {
    permissions: permissionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
