import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const [socket, setSocket] = useState(null);
  const { authUser } = useSelector((store) => store.user);
  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:8000", {});
      socket.on("error", (error) => {
        console.error("Socket connection error:", error);
      });
      setSocket(socket);

      // Cleanup function to close the socket connection when the component unmounts
      return () => {
        socket.disconnect();
      };
    }
  }, [authUser]);
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
