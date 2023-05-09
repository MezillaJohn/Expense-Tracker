import axios from "axios";

const BASE_URL =
  "https://reactnative-http-request-default-rtdb.europe-west1.firebasedatabase.app/expenses.json";

export async function storeExpense(expenseData) {
  const res = await axios.post(BASE_URL, expenseData);

  return res.data.name;
}

export async function fetchExpenses() {
  const res = await axios.get(BASE_URL);

  const expenses = [];

  for (const key in res?.data) {
    const expenseObj = {
      id: key,
      amount: res?.data[key].amount,
      date: new Date(res?.data[key].date),
      description: res?.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(
    `https://reactnative-http-request-default-rtdb.europe-west1.firebasedatabase.app/expenses/${id}.json`,
    expenseData
  );
}

export function deleteExpense(id) {
  axios.delete(
    `https://reactnative-http-request-default-rtdb.europe-west1.firebasedatabase.app/expenses/${id}.json`
  );
}
