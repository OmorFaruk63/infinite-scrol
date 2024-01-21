import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const App = () => {
  const [first, setFirst] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_start=${first}&_limit=20`
    )
      .then((response) => response.json())
      .then((json) => setData([...data, ...json]));
  }, [first]);
  function fetchData() {
    setFirst((prev) => prev + 20);
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              delectus ipsam cupiditate{" "}
            </p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default App;
