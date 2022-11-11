import HomeLayout from "components/layouts/HomeLayout";
import React, { useState } from "react";

const UseStateExample1 = () => {
  // 데이터가 변하면 화면이 다시 그려진다.
  const [count, setCount] = useState(0);

  // use 시리즈가 아닌 데이터는 렌더링 때 마다 새로 생성된다.
  const randomNumber = Math.random();
  // 변경되면 안 될 때 사용하는 방법
  // count [randomNumber, setRandomNumber] = useState(Math.random());

  return (
    <HomeLayout>
      <div>
        <h1>useState example 1</h1>
        <p>{randomNumber}</p>
        <p>count: {count}</p>
        {/* <button onClick={() => setCount(count + 1)}>증가</button> */}
        <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
        {/* <button onClick={() => setCount((prev) => prev + 1)}>랜덤넘버</button> */}

      </div>
    </HomeLayout>
  );
};

export default UseStateExample1;
