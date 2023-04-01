import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Directory from "../../components/directory/directory";
import { UserContext } from "../../context/user.context";
import "../../index.scss";

function Home() {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <>
      <Directory />
    </>
  );
}

export default Home;
