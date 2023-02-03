import { useEffect, useState } from "react";
import { Post } from "./models/post";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

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
      <div> </div>
      {JSON.stringify(posts)}
    </div>
  );
}

export default App;
