import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from  "./components/auth/login/Login"
import Dashboard from "./components/library/dashboard/Dashboard";
import TextNotFound from "./components/textNotFound/TextNotFound";
const App = () => {

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='library' element={<Dashboard />} />
            <Route path='*' element={<TextNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;