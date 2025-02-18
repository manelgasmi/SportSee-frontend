import { useState, useEffect } from "react";
import userService from "../../services/userService";

import BarChartComponent from "../../components/bar-chart/BarChartComponent";

const Dashboard = () => {
  const userId = 18;
  const [user, setUser] = useState(null);
  const [userActivities, setUserActivities] = useState(null);
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
    };

    getUserDetails();
    getUserActivity();
  }, []);

  if (user) {
    return (
      <main className="w-full m-[50px] mb-auto  max-w-[1126px]">
        <h1 className="text-5xl font-bold mb-8">
          Bonjour <span className="text-red-500">{user.userInfos.firstName}</span>
        </h1>
        <p className="congratulation">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        <div className="flex mt-10">
          <div className="w-3/4">
            <div className="bg-gray-50 pb-10 pt-4" >
              <BarChartComponent activities={userActivities} />
            </div>
            <div></div>
          </div>
          <aside className="w-1/4"></aside>
        </div>
      </main>
    );
  } else {
    return (
      <main className="w-full m-[55px] mb-auto ml-[100px] max-w-[1126px]">
        <h1>Chargement...</h1>
      </main>
    );
  }
};

export default Dashboard;
