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

Following the KISS design principle, and considering that it is a simple application (with 1 screen only), I decided to include less dependencies as possible, So...

- It is not using any modern UI widget toolkit, because the components are quite simple.

- It is not using any router library, because the application contains 1 screen only.

- It is not using any CSS processor, because of the simplicity of its components.

- It is not using any global state container (like MobX, redux/thunk, etc.), because there only 1 fetch request.
