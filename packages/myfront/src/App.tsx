import React, { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// mylib에서 hello 함수를 import
import { hello } from "mylib";
import Todo from "./todo/Todo";
import { AppRouter } from "./routerExample/router";
import { LocaleTest } from "./localeTest/LocaleTest";
import "./localeTest/i18n";
// 원격 Sung 컴포넌트 import
// @ts-ignore
const RemoteSung = React.lazy(() => import("yourfront/SungPage"));

function App() {
  const [count, setCount] = useState(0);
  const [route, setRoute] = useState<"TODO" | "SUNG">("TODO");

  const handleClick = () => {
    setRoute(route === "TODO" ? "SUNG" : "TODO");
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LocaleTest />
      </Suspense>
      <AppRouter />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ height: "10px", backgroundColor: "red" }}></div>
      <button onClick={handleClick} style={{ backgroundColor: "red" }}>
        {route === "TODO" ? "TODO" : "SUNG"}
      </button>
      {/* {route === "TODO" ? (
        <Todo />
      ) : (
        <Suspense fallback={<div>Loading Sung Page...</div>}>
          <RemoteSung />
        </Suspense>
      )} */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {/* mylib 함수 사용 예시 */}
      <div className="card">
        <p>
          mylib에서 가져온 메시지: <strong>{hello()}</strong>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
