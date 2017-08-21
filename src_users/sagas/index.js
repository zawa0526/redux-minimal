import { takeLatest } from "redux-saga";
import { fork, put } from "redux-saga/effects";
import { usersFetchList, usersAddEdit, usersDelete } from "./users";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'USERS_FETCH_LIST', usersFetchList),
    fork(takeLatest, 'USERS_ADD_EDIT', usersAddEdit),
    fork(takeLatest, 'USERS_DELETE', usersDelete),
    fork(takeLatest, 'GIT_REPOS_FETCH_LIST', function*() {
      console.log("sagas/index.js");
      yield put({
        type: 'GIT_REPOS_LIST_SAVE',
        gitRepos: [{name: "repo1", author: "takazawa"}],
      });
    })
  ];
}
