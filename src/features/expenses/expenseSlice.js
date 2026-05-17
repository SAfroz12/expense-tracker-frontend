import { createSlice } from "@reduxjs/toolkit";

const savedExpenses =
  JSON.parse(localStorage.getItem("expenses")) || [];

const initialState = {
  expenses: savedExpenses,
};

const expenseSlice = createSlice({
  name: "expenses",

  initialState,

  reducers: {

    addExpense: (state, action) => {

      state.expenses.push(action.payload);

      localStorage.setItem(
        "expenses",
        JSON.stringify(state.expenses)
      );
    },

    deleteExpense: (state, action) => {

      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );

      localStorage.setItem(
        "expenses",
        JSON.stringify(state.expenses)
      );
    },

    editExpense: (state, action) => {

      const index = state.expenses.findIndex(
        (expense) =>
          expense.id === action.payload.id
      );

      state.expenses[index] = action.payload;

      localStorage.setItem(
        "expenses",
        JSON.stringify(state.expenses)
      );
    },
  },
});

export const {
  addExpense,
  deleteExpense,
  editExpense,
} = expenseSlice.actions;

export default expenseSlice.reducer;