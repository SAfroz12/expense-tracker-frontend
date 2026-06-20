import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loans: [],
};

const loanSlice = createSlice({
  name: "loans",

  initialState,

  reducers: {
    addLoan: (state, action) => {
      state.loans.push(action.payload);
    },

    deleteLoan: (state, action) => {
      state.loans = state.loans.filter(
        (loan) => loan.id !== action.payload
      );
    },

    markAsPaid: (state, action) => {
      const loan = state.loans.find(
        (loan) => loan.id === action.payload
      );

      if (loan) {
        loan.status = "Paid";
      }
    },
  },
});

export const {
  addLoan,
  deleteLoan,
  markAsPaid,
} = loanSlice.actions;

export default loanSlice.reducer;