import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice.js';

export default configureStore({
  reducer: {
    counter: counterReducer,
  }
});

/** Здесь мы вызываем функцию configureStore() и передаем в нее объект со свойством reducer. А вот уже в reducer мы указываем объект с нашими редьюсерами. 
 * В нашем примере есть единственный редьюсер counterReducer, который мы импортируем по умолчанию из counterSlice.js. */