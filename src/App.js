import { Route, Routes } from "react-router-dom";

// import Todo from "./components/Todo";
import Newmeet from "./pagess/Newmeet";
import Favmeet from "./pagess/Favmeet";
import Allmeets from "./pagess/Allmeets";
import Layout from "./components/layouts/Layout";
function App() {
  return (
    <>
      {/* <div>
        <h1>My Todos</h1>
        <Todo text="1st todo" />
        <Todo text="2nd todo" />
        <Todo text="3rd todo" />
      </div> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Allmeets />} />

          <Route path="/new-meets" element={<Newmeet />} />

          <Route path="/fav-meets" element={<Favmeet />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
