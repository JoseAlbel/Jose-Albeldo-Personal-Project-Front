import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/redux/users.slice";
import carReducer from "../features/redux/car.slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    cars: carReducer,
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
