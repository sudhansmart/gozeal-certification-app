import { configureStore } from "@reduxjs/toolkit";
import certificationReducer, { CertificationState } from "./certificationSlice";

export const store = configureStore({
  reducer: {
    certification: certificationReducer,
  },
});

// Explicitly define RootState type to avoid TS(4023) error
export type RootState = {
  certification: CertificationState;
};

export type AppDispatch = typeof store.dispatch;
