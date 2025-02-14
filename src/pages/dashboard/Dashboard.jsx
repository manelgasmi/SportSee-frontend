import { useState, useEffect } from "react";
import userService from "../../services/userService";
import "./Dashboard.scss";
import BarChartComponent from "../../components/bar-chart/BarChartComponent";

const Dashboard = () => {
  const userId = 18;
  const [user, setUser] = useState(null);
  const [userActivities, setUserActivities] = useState (null);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const userData = await userService.fetchUserData(userId);
      setUser(userData);
    };
    const getUserActivity = async () => {
      const userActivityData = await userService.fetchUserActivity(userId);
      setUserActivities(userActivityData);
      console.log(userActivityData);
      
    }

    getUserDetails();
    getUserActivity();
  }
  , []);
console.log(user);


  if (user) {
    return (
      <main className="container">
        <div className="h-10 w-10 border"></div>
        <h1 className="welcome">
          Bonjour <span>{user.userInfos.firstName}</span>
        </h1>
        <p className="congratulation">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        <div>
          <BarChartComponent activities={userActivities}/>
        </div>
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
