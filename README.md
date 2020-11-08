# UserBrowser

UserBrowser is a simple app to browser GitHub users.

It is a standard ReactJS project (created with `npx create-react-app...`), so basically:

```
git clone https://github.com/samereberlin/UserBrowser.git
cd UserBrowser
npm i
npm start
```
_More details at [README.CRA.md](README.CRA.md) (from create-react-app)._

## Design decisions:

Following the KISS design principle...

- It is not using any router library (like react-navigation, react-router-dom, etc.), because the application contains 1 screen only.

- It is not using any CSS processor (like sass, less, etc.), because of the simplicity of its components.

- It is not using any global state container (like MobX, Redux, etc.), because there are only one object and one arrays of data (managed by its own component/consumer).

## TO-DO list (next steps):

The application still needs a lot of adjustments to reach the production level, and the list below presents the main/urgent needs according to my feeling...

- Improve error handing (since currently it prints log messages only).

- Improve details UI (since currently it is too much simple and ugly).

- Implement additional requests to fetch relevant info (like public repos, followers, etc.).

- Write unit-tests and end-to-end tests (at least to cover basic functionalities).

- Debounce onInputChange executions to prevent intermediate network requests while typing.

- Choose an i18n solution (currently it contains hard-coded english texts only).
