import { useState, useEffect } from "react";
import userService from "../../services/userService";

import BarChartComponent from "../../components/bar-chart/BarChartComponent";
import LineChartComponent from "../../components/line-chart/LineChartComponent";
import RadarChartComponent from "../../components/radarChartComponent/RadarChartComponent";
import KeyDataComponent from "../../components/key-data/KeyDataComponent";
import PieChartComponent from "../../components/pie-chart/PieChartComponent";
const Dashboard = () => {
  const userId = 18;
  const [user, setUser] = useState(null);
  const [userActivities, setUserActivities] = useState(null);
  const [userSessions, setUserSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const userData = await userService.fetchUserData(userId);      
      setUser(userData);
    };
    const getUserActivity = async () => {
      const userActivityData = await userService.fetchUserActivity(userId);
      setUserActivities(userActivityData);
    };
    const getUseruserSessions = async () => {
      const userSessionsData = await userService.fetchUserSessions(userId);
      setUserSessions(userSessionsData.sessions);
    };
    const getUseruserPerformance = async () => {
      const userPerformanceData = await userService.fetchUserPerformance(
        userId
      );
      setUserPerformance(userPerformanceData);
    };

    // const getUseruserScore = async () => {
    //   const userScoreData = await userService.fetchUserScore(userId);
    //   setUserScore(userScoreData);
    // };

    getUserDetails();
    getUserActivity();
    getUseruserSessions();
    getUseruserPerformance();
    // getUseruserScore();
  }, []);

  if (user) {
    return (
      <main className="w-full m-[50px] mb-auto  max-w-[1126px] pb-30">
        <h1 className="text-5xl font-bold mb-8">
          Bonjour{" "}
          <span className="text-red-500">{user.userInfos.firstName}</span>
        </h1>
        <p className="congratulation">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        <div className="flex mt-10 gap-10">
          <div className="w-3/4">
            <div className="bg-lightgray pb-10 pt-4">
              <BarChartComponent activities={userActivities} />
            </div>
            <div className="flex mt-8 gap-6">
              <div className="w-1/3">
                <LineChartComponent sessions={userSessions} />
              </div>
              <div className="w-1/3">
                <RadarChartComponent userPerformance={userPerformance} />
              </div>
              <div className="w-1/3 bg-lightgray">
                <PieChartComponent score={user.score} />
              </div>
            </div>
          </div>
          <aside className="w-1/4 rounded-2xl flex flex-col gap-10">
            <KeyDataComponent keyData={user.keyData} />
          </aside>
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
