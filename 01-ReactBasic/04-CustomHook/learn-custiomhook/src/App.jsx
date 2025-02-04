import { useEffect, useState } from "react";

// Custom hook to manage a counter
function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((count) => count + 1);
  }  

  return {
    count,
    increaseCount,
  };
}

// Custom hook to fetch data
function useFetch(url) {
  const [post, setPost] = useState(null);

  async function getPost() {
    try {
      const response = await fetch(url);
      const res = await response.json();
      setPost(res);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  useEffect(() => {
    getPost();
  }, [url]); // Empty dependency array ensures this runs only once

  return post; // Return the fetched post
}

function App() {
  // Using the custom hooks
  const { count, increaseCount } = useCounter();
  const data = useFetch("https://jsonplaceholder.typicode.com/todos/"+ 6);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      {data ? <h2>{data.title}</h2> : <p>Loading...</p>}
    </div>
  );
}

export default App;
