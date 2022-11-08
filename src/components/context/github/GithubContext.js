import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext({
  users: [],
  user: {},
  clearUsers: () => {},
});

export const GithubProvider = ({ children }) => {
  const initalState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initalState);

  const value = {
    ...state,
    dispatch,
  };

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
};

export default GithubContext;

// git initial users 테스트용
// const fetchUsers = async () => {
//   setLoading();
//   const res = await fetch(`${GITHUB_URL}/users`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
//   const data = await res.json();
//   dispatch({ type: "GET_USERS", payload: data });
// };

// const searchUsers = async (text) => {
//   setLoading();
//   const params = new URLSearchParams({
//     q: text,
//   });
//   const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
//   const { items } = await res.json();
//   dispatch({ type: "GET_USERS", payload: items });
// };

// const getUser = async (login) => {
//   setLoading();

//   const res = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   if (res.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await res.json();
//     dispatch({ type: "GET_USER", payload: data });
//   }
// };

// const getUserRepos = async (login) => {
//   setLoading();
//   const params = new URLSearchParams({
//     sort: "created",
//     per_page: 10,
//   });

//   const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
//   const data = await res.json();
//   dispatch({ type: "GET_REPOS", payload: data });
// };

// const setLoading = () => {
//   dispatch({ type: "LOADING" });
// };

// const clearUsers = () => {
//   dispatch({ type: "CLEAR" });
// };
