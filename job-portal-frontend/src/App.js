import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navbar";
import CreateJob from "./Pages/CreateJob";
import MyJob from "./Pages/MyJob";
import SalaryPage from "./Pages/SalaryPage";
import UpdateJob from "./Pages/UpdateJob";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-job" element={<CreateJob />} />
        <Route path="/my-job" element={<MyJob />} />
        <Route path="/salary" element={<SalaryPage />} />
        <Route
          path="/edit-job/:id"
          element={<UpdateJob />}
          loader={({ params }) => fetch(`http://localhost:3000/all-jobs/${params.id}`)}
        />

      </Routes>
    </>
  );
}

export default App;