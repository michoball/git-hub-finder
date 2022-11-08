const githubReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    // case "GET_USER":
    //   return {
    //     ...state,
    //     user: action.payload,
    //     loading: false,
    //   };
    // case "GET_REPOS":
    //   return {
    //     ...state,
    //     repos: action.payload,
    //     loading: false,
    //   };
    case "CLEAR":
      return {
        ...state,
        users: [],
      };
    default:
      return;
  }
};

export default githubReducer;
