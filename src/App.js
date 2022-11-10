import AppDesc from "pages/AppDesc";
import UseEffectExample1 from "pages/effect/UseEffectExample1";
import UseMemoExample1 from "pages/memo/UseMemoExample1";
import UseRefExample1 from "pages/ref/UseRefExample1";
import UseRefExample2 from "pages/ref/UseRefExample2";
import UseStateExample1 from "pages/state/UseStateExample1";
import UseStateExample2 from "pages/state/UseStateExample2";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppDesc />} />
        <Route path="/state1" element={<UseStateExample1 />} />
        <Route path="/state2" element={<UseStateExample2 />} />
        <Route path="/ref1" element={<UseRefExample1 />} />
        <Route path="/ref2" element={<UseRefExample2 />} />
        <Route path="/memo1" element={<UseMemoExample1 />} />
        <Route path="/effect1" element={<UseEffectExample1 />} />
        <Route path="*" element={<AppDesc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
