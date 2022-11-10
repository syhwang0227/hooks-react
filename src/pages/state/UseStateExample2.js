import HomeLayout from "components/layouts/HomeLayout";
import React, { useState } from "react";

const UseStateExample2 = () => {
  // 가장 기본적인 사용방법
  // but 잘못사용하면 성능저하가 될 수 있다.
  // 동적 유효성체크는 react-hook-form 등을 사용하자.
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit = (event) => {
    // 이벤트 막기
    event.preventDefault();

    // 데이터 가져오기
    console.log(id);

    // 데이터 검증하기
    // if (id === "") {

    // 로그인처리
    // const data = {
    //   id,
    //   pw,
    // };
  };

  return (
    <HomeLayout>
      <h1>useState example 2</h1>
      <form onSubmit={onSubmit}>
        <input
          type={"text"}
          name={"id"}
          defaultValue={id}
          onChange={(e) => setId(e.target.value)}
          placeholder={"아이디"}
        />
        <input
          type={"password"}
          name={"pw"}
          defaultValue={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder={"비밀번호"}
        />
        <button type={"submit"}>로그인</button>
      </form>
    </HomeLayout>
  );
};

export default UseStateExample2;
