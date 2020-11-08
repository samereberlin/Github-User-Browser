const GITHUB_AUTH =
  "Basic MjVlNDlkZDFlZmIzZGU1NDhmODI6ZjczNjI3NzBmYmRiMjUzN2IxM2ZlMTk5YjY2M2E0ZGNjODI5ZGUzNQ==";
const GITHUB_SEARCH_URL = "https://api.github.com/search/users?type=Users&q=";
const GITHUB_USER_URL = "https://api.github.com/users/";

export const fetchUser = (login: string) => {
  return fetch(`${GITHUB_USER_URL}${login}`, {
    headers: {
      Authorization: GITHUB_AUTH,
    },
  }).then((data) => data.json());
};

export const searchUsers = (value: string) => {
  return fetch(`${GITHUB_SEARCH_URL}${value}+in:login`, {
    headers: {
      Authorization: GITHUB_AUTH,
    },
  }).then((data) => data.json());
};
