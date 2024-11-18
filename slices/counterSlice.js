import { createSlice } from '@reduxjs/toolkit';

const initState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1; 
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.actions;

/** Чтобы создать редьюсер, создаем начальное значение initialState и вызываем createSlice(), который выполняет всю работу. Эта функция принимает объект, в котором нам важны три свойства:

    name задает имя слайса
    initialState задает начальное состояние
    reducers принимает объект, в котором каждое свойство содержит редьюсеры. С их помощью мы будем менять состояние

Вызов createSlice() вернет готовый слайс — это объект, в котором нам важны два свойства:

    actions — это действия, с помощью которых мы запускаем созданные редьюсеры. Названия действий совпадают с ключами, которые мы указали в reducers при создании слайса. Toolkit автоматически создаст нужные действия и даст строковые имена их типам.

    В примере выше мы экспортируем объект с действиями, которые получили из этого свойства. Дальше можно импортировать действия в компонентах, чтобы вызывать их.

    reducer — это готовый редьюсер, который мы будем подключать в хранилище. В примере выше он экспортируется по умолчанию просто для удобства, чтобы разграничить экспорт экшенов и редьюсера.
 */