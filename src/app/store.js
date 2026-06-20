import { configureStore } from "@reduxjs/toolkit";

import expenseReducer from "../features/expenses/expenseSlice";
import loanReducer from "../features/loans/loanSlice"
export const store = configureStore({
  reducer: {
    expenses: expenseReducer,
    loans:loanReducer
  },
});