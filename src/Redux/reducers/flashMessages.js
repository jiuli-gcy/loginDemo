import { ADD_FLASH_MESSAGE } from 'assets/constants';
//import shortid from 'shortid';

// const flashMessages = (state = [], action = {}) => {
//   switch(action.type) {
//     case ADD_FLASH_MESSAGE:
//       return [
//         ...state,
//         {
//           id: shortid.generate(),
//           type: action.message.type,
//           text: action.message.text
//         }
//       ];
//     default: return state;
//   }
// }
const flashMessages = (state = [], action = {}) => {
    switch(action.type) {
      default: return state;
    }
}

export default flashMessages;