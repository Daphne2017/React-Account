import {
    handleActions
} from 'redux-actions';
import actions from '../actions/index';
import Immutable from "seamless-immutable";

const defaultState = Immutable({
    loading: false,
    accounts: [],
    all: 0
});
// createAction: https://github.com/redux-utilities/redux-actions/blob/master/docs/api/createAction.md
// combineActions: https://github.com/redux-utilities/redux-actions/blob/master/docs/api/combineActions.md
// handleActions的使用方法：https://github.com/redux-utilities/redux-actions/blob/master/docs/api/handleAction.md
// 写法一：
// const reducer = handleActions(
//     new Map([
//         [
//             actions.setLoading,
//             (state, action) =>
//             {
//                 console.log("reducer里边的action",action);
//                 return state.set("loading", action.payload)
//             }
           
//         ],
//         [
//             actions.setAccount,
//             (state, {
//                 payload
//             }) => 
//             state.set("accounts", payload)
//         ],
//         [
//             actions.setAll,
//             (state, {
//                 payload
//             }) =>
//             state.set("all", payload)
//         ]
//     ]),
//     defaultState
// );
// 写法二：
// const reducer = handleActions({
//     'SET_LOADING': (state, action) => {
//         console.log("reducer里边的action",action);
//         return state.set("loading", action.payload)
//     },
//     'SET_ACCOUNT': (state, {payload}) =>  state.set("accounts", payload),
//     'SET_ALL': (state, {payload}) =>  state.set("all", payload)
//   }, defaultState);
// 写法三
const reducer = handleActions({
    [actions.setLoading().type]: (state, action) => {
        console.log("reducer里边的action",action);
        return state.set("loading", action.payload)
    },
    [actions.setAccount().type]: (state, {payload}) =>  state.set("accounts", payload),
    [actions.setAll().type]: (state, {payload}) =>  state.set("all", payload)
  }, defaultState);
export default reducer;