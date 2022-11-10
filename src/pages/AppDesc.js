import HomeLayout from "components/layouts/HomeLayout";
import React, {
  // createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// https://www.youtube.com/watch?v=GGo3MVBFr1A

function AppDesc() {
  // 데이터가 아닌 태그를 조작할 때는 useRef를 사용한다.
  // 때때로 데이터를 조작할 때에도 useRef를 사용한다.
  const idRef = useRef();
  const pwRef = useRef();

  // 데이터를 조작할 때는 useState를 사용한다.
  // 데이터가 변경되면 화면이 다시 그려진다. (일반 객체도 다시그려진다.)
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 데이터를 가공해야 할 때에는 useMemo를 사용한다.
  // 데이터를 일반 객체로 가공하면 state로 데이터 변경시 객체가 다시 세팅된다.
  // const userInfo = `현재 아이디는 ${id} 입니다.`
  const userInfo = useMemo(() => `현재 아이디는 ${id} 입니다.`, [id]);

  // 함수를 가공해야 할 때에는 useCallback을 사용한다.
  const userFunc = useCallback(() => {
    console.log(id);
  }, [id]);

  // 화면이 렌더링 된 이후 작동한다.
  // 1. 화면이 로딩 된 후 포커싱을 줄 때
  useEffect(() => {
    idRef.current.focus();
  }, []);

  // 2. 특정 데이터가 변경될 때
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  // 3. 통신할 때
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users");
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  // 전역데이터를 사용할 때에는 createContext를 사용한다.
  // const LoginContext = createContext();

  return (
    <HomeLayout>
      <h1>HOME</h1>
      <form onSubmit={onSubmit}>
        <input
          ref={idRef}
          type={"text"}
          name={"id"}
          defaultValue={id}
          onChange={(e) => setId(e.target.value)}
          placeholder={"아이디"}
        />
        <input
          ref={pwRef}
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
}

export default AppDesc;
