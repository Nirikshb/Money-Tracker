import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from "./reducer";

export const INITIAL_STORE = [
  {
    id: "1",
    title: "Swiggy Order",
    Description: "I was feeling hungry",
    expenseType: "EXPENSE",
    amount: 20000,
    date: "2023-02-10",
  },

  {
    id: "2",
    title: "Zomato Order",
    Description: "I was feeling hungry",
    expenseType: "EXPENSE",
    amount: 20000,
    date: "2023-02-10",
  },

  {
    id: "3",
    title: "Salary",
    Description: "I was feeling hungry",
    expenseType: "INCOME",
    amount: 20000,
    date: "2023-02-10",
  },

  {
    id: "4",
    title: "Swiggy Order",
    Description: "I was feeling hungry",
    expenseType: "EXPENSE",
    amount: 20000,
    date: "2023-02-10",
  },
  
  {
    id: "5",
    title: "Netflix Subscription",
    Description: "Entertainment",
    expenseType: "EXPENSE",
    amount: 1500,
    date: "2023-03-05",
  },
  {
    id: "6",
    title: "Freelance Project",
    Description: "Web development work",
    expenseType: "INCOME",
    amount: 50000,
    date: "2023-03-15",
  },
  {
    id: "7",
    title: "Grocery Shopping",
    Description: "Essential items",
    expenseType: "EXPENSE",
    amount: 5000,
    date: "2023-03-20",
  },
 

];
//hardcoded values 
export const store = createStore(reducer, INITIAL_STORE, composeWithDevTools());
