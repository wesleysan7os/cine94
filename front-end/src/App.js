import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import SinglePost from "./pages/PostPage";
import CreatePost from "./pages/WritePage";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        {/* <Route path="*" element={<NotFoundPage />}  /> */}
      </Routes>
    </Router>
  );
}

export default App;