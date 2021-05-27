import { css } from 'lit';

export default css`
  .progress {
    border-radius: 3px;
    background-color: #eee;
    height: 5px;
  }
  .todo-progress {
    height: 5px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #5bc0de;
    transition: 0.3s;
  }
`;
