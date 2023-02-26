import { createGlobalStyle } from 'styled-components';
import media from "styled-media-query";
import {
  greenColor,
  todoColor,
  doingColor,
  doneColor
} from './variables';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .form__input {
    min-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input {
    margin: 0 5px;
    width: 50%;
    padding: 10px 15px;
  }

  .addTodoBtn {
    width: 150px;
    padding: 10px;
    cursor: pointer;
    background-color: ${greenColor};
    color: #fff;
    border: none;
    outline: none;
    height: 43px;
    border-radius: 25px;
  }

  .updateTodoBtn {
    width: 150px;
    padding: 10px;
    cursor: pointer;
    background-color: ${greenColor};
    color: #fff;
    border: none;
    outline: none;
    height: 43px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
  }

  .container {
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    ${media.lessThan("small")`
      flex-direction: column;
    `}
  }

  .done__wrapper,
  .doing__wrapper,
  .todo__wrapper {
    width: 32%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    padding: 5px;
    ${media.lessThan("small")`
      width: 100%;
    `}
  }

  .doing__wrapper>h3,
  .todo__wrapper>h3,
  .done__wrapper>h3 {
    text-align: center;
    text-transform: capitalize;
  }

  .todo__items {
    background-color: ${todoColor};
  }

  .doing__items {
    background-color: ${doingColor};
  }

  .done__items {
    background-color: ${doneColor};
  }

  .todo__container,
  .doing__container,
  .done__container {
    width: 100%;
    min-height: 55vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .todo__items,
  .doing__items,
  .done__items {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    ${media.lessThan("small")`
      padding: 5px;
      text-align: center;
    `}
  }

  .comments__buttons{
    display: flex;
    ${media.lessThan("small")`
      flex-direction: column;
    `}
  }

  .comments__container {
    padding: 20px;
  }

  .comment__form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .comment__form>label {
    margin-bottom: 15px;
  }

  .comment__form textarea {
    width: 80%;
    padding: 15px;
    margin-bottom: 15px;
  }

  .commentBtn {
    padding: 10px;
    width: 200px;
    background-color: ${greenColor};
    outline: none;
    border: none;
    color: #fff;
    height: 45px;
    cursor: pointer;
    margin-right: 1rem;
    border-radius: 30px;
    ${media.lessThan("small")`
      margin-top: 1rem;
    `}
  }

  .comments__section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .login__form {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .login__form>label {
    margin-bottom: 15px;
  }

  .login__form>input {
    width: 70%;
    padding: 10px 15px;
    margin-bottom: 15px;
  }

  .login__form>button {
    background-color: ${greenColor};
    color: #fff;
    padding: 15px;
    cursor: pointer;
    border: none;
    font-size: 16px;
    outline: none;
    width: 200px;
  }
`;

export default GlobalStyle;
