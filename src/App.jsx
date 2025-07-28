import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    // made an dummy api call to get user login info
    const data = {
      name: "Demo User",
    };
    setUsername(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
