import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddJob from "./components/AddJob.jsx";
import UpdateJob from './components/UpdateJobs';
import JobList from './components/JobList.jsx';
import Navbar from './components/Navbar.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<JobList />} />
        <Route path="/" element={<JobList />} />
        <Route path="/AddJob" element={<AddJob />} />
        <Route path="/editJob/:id" element={<UpdateJob />} />
      </Routes>
    </BrowserRouter>
  );
}
