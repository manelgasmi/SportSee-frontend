import { useState, useEffect } from "react";
import userService from "../../services/userService";
import "./Dashboard.scss";

const Dashboard = () => {
  const userId = 12;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const userData = await userService.fetchUserData(userId);
      setUser(userData);
    };

    getUserDetails();
  }, []);

  if (user) {
    return (
      <main className="container">
        <h1 className="welcome">
          Bonjour <span>{user.userInfos.firstName}</span>
        </h1>
        <p className="congratulation">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </main>
    );
  } else {
    return (
      <main className="container">
        <h1>Chargement...</h1>
      </main>
    );
  }
};

export default Dashboard;
