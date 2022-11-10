import HomeLayout from "components/layouts/HomeLayout";
import React, { useEffect, useRef } from "react";

const UseRefExample1 = () => {
  // 데이터가 아닌 태그를 조작할 때는 useRef를 사용한다.
  // 때때로 데이터를 조작할 때에도 useRef를 사용한다.
  const idRef = useRef();
  const pwRef = useRef();

  const onSubmit = () => {
    console.log(idRef.current.value);
    console.log(pwRef.current.value);
  };

  useEffect(() => {
    idRef.current.focus();
  }, []);

  return (
    <HomeLayout>
      <h1>useRef example 1</h1>
      <form>
        <input ref={idRef} type={"text"} placeholder={"아이디"} />
        <input ref={pwRef} type={"password"} placeholder={"비밀번호"} />
        <button type={"button"} onClick={onSubmit}>
          로그인
        </button>
      </form>
    </HomeLayout>
  );
};

export default UseRefExample1;
