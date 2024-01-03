import { Route, Routes } from "react-router-dom";
import RegisterUser from "./components/registerpage";
import AccountActivator from "./components/activate";
import Signinuser from "./components/signin";
import ForgotPassword from "./components/resetpassword";
import Updatepassword from "./components/updatepassword";
import Displaypage from "./components/loggedin";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<RegisterUser />} />
      <Route path="/signin" element={<Signinuser />} />
      <Route path="/loggedin" element={<Displaypage />} />

      <Route path="/reset" element={<ForgotPassword />} />
      <Route path="/forgotpassword/:id" element={<Updatepassword />} />
      <Route path="/activate/:id" element={<AccountActivator />} />
    </Routes>
  );
}

export default App;
