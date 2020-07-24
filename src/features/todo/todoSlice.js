import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    id: 0,
    newTodo: '',
    completed: false,
    todos: []
  },
  reducers: {
    addTodo: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.id += 1
    }
  }
});

export const { addTodo } = todoSlice.actions;

export const allTodos = state => state.todo.todos;

export default todoSlice.reducer;