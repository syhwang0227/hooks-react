import HomeLayout from "components/layouts/HomeLayout";
import React, { useEffect, useRef } from "react";

const UseRefExample2 = () => {
  // ref들을 배열이나 객체로 관리하면 편하다.
  const refs = useRef({
    idElement: null,
    pwElement: null,
  });

  const onSubmit = () => {
    const { idElement, pwElement } = refs.current;

    console.log(idElement);
    console.log(pwElement);
  };

  useEffect(() => {
    refs.current.idElement.focus();
  }, []);

  return (
    <HomeLayout>
      <h1>useRef example 2</h1>
      <form>
        <input
          ref={(el) => (refs.current.idElement = el)}
          type={"text"}
          placeholder={"아이디"}
        />
        <input
          ref={(el) => (refs.current.pwElement = el)}
          type={"password"}
          placeholder={"비밀번호"}
        />
        <button type={"button"} onClick={onSubmit}>
          로그인
        </button>
      </form>
    </HomeLayout>
  );
};

export default UseRefExample2;
