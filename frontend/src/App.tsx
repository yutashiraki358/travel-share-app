import { useEffect, useState } from "react";
import styled from "styled-components";
import { Post as PostModel } from "./models/post";
import axios from "axios";
import Card from "./components/Card/Card";

function App() {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/api/posts")
      .then((response) => {
        console.log(response.data);
        const posts = response.data;
        setPosts(posts);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  }, []);

  return (
    <div className="App">
      <StyledRoot>
        <StyledContainer>
          {posts.map((post) => (
            <Card post={post} key={post._id} />
          ))}
        </StyledContainer>
      </StyledRoot>
    </div>
  );
}

const StyledRoot = styled.div`
  padding: 50px 12px;
`;
const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`;

export default App;
