import HomeLayout from "components/layouts/HomeLayout";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import axios from "axios";

// 없어도 됨
const sleep = (sec) => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
};

const UseEffectExample1 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({
    userId: 0,
    id: 0,
    title: "",
    body: "",
  });

  const substringTitle = useMemo(() => {
    return post.title.substring(0, 20) + "...";
  }, [post]);

  const callData = useCallback(async () => {
    setIsLoading(true);
    await sleep(2);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (response.status === 200) {
          setPost(response.data);
        } else {
          console.log("에러 확인");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    // useEffect는 await를 사용할 수 없다.
    callData();
  }, []);
  return (
    <HomeLayout>
      <div>
        <h1>useEffect example 1</h1>
        <button onClick={callData}>데이터 다시 불러오기</button>
        <div className="d-flex justify-content-around">
          {isLoading ? (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
              </Card.Body>
            </Card>
          ) : (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.scdn.co/image/ab67616d0000b273f7617d28f765e71e7687dfcc"
              />
              <Card.Body>
                <Card.Title>{substringTitle}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

export default UseEffectExample1;
