// users reducer
export default function gitRepos(state = {}, action) {
  switch (action.type) {
    case 'GIT_REPOS_LIST_SAVE':
      console.log("gitRepo.js: ", action.gitRepos);
      return action.gitRepos;

    // initial state
    default:
      return state;
  }
}
