import HomeLayout from "components/layouts/HomeLayout";
import React, { useMemo, useState } from "react";

const UseMemoExample1 = () => {
  const [boxSwitch, setBoxSwitch] = useState(false);
  const [count, setCount] = useState(0);

  // 일반 객체 사용시 state가 하나라도 바뀌면 계속 재로딩된다.
  // /** @type {React.CSSProperties} */
  // const randomBoxStyle = {
  //   backgroundColor: "gray",
  //   width: `${Math.random() * 500}px`,
  //   height: `${Math.random() * 500}px`,
  // };

  // 이 코드를 주석 처리하면 위의 코드 단락 주석 해제
  // useMemo를 사용하면 원하는 state를 고를 수 있다.
  // useMemo를 여러개 생성해서 원하는 state를 고를 수 있다.
  const randomBoxStyle = useMemo(() => {
    return {
      backgroundColor: "gray",
      width: `${Math.random() * 500}px`,
      height: `${Math.random() * 500}px`,
    };
  // }, [boxSwitch]);
  }, [boxSwitch, count]);


  return (
    <HomeLayout>
      <div>
        <h1>useMemo example 1</h1>
        <div>카운트 : {count}</div>
        <div>
          <button onClick={() => setCount((prev) => prev + 1)}>+1 버튼</button>
        </div>
        <br />
        <br />
        <br />
        <div>박스 스위치 :{String(boxSwitch)}</div>
        <div>
          <button onClick={() => setBoxSwitch((prev) => !prev)}>
            박스 사이즈 변경
          </button>
        </div>
        <div style={randomBoxStyle}>박스</div>
      </div>
    </HomeLayout>
  );
};

export default UseMemoExample1;
