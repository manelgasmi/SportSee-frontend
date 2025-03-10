import axios from "axios";
import mockedData from '../mock/mockedData.json';
/**
 * Api URL
 *
 * @type {"http://localhost:3000"}
 */
const API_BASE_URL = "http://localhost:3000"; 

/**
 * Fetch user basic information
 *
 * @async
 * @param {*} userId 
 * @returns {unknown} 
 */
const fetchUserData = async (userId) => {  
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
    const userData = response.data.data;
    userData.score = userData.todayScore ? userData.todayScore : userData.score;
    return userData;
  } catch (error) {
    console.error("Error fetching user data from server:", error);
    mockedData.UserInformation[0].score = mockedData.UserInformation[0].todayScore
    return mockedData.UserInformation[0];
  }
};

/**
 * Fetch user activity (e.g., daily calorie burn, weight tracking)
 *
 * @async
 * @param {*} userId 
 * @returns {unknown} 
 */
const fetchUserActivity = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user activity:", error);
    return mockedData.UserActivity[0];
  }
};

/**
 * Fetch user sessions
 *
 * @async
 * @param {*} userId 
 * @returns {unknown} 
 */
const fetchUserSessions = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user activity:", error);
    return mockedData.UserAverageSessions[0];
  }
};

/**
 * Fetch user performance (e.g., endurance, speed, strength)
 *
 * @async
 * @param {*} userId 
 * @returns {unknown} 
 */
const fetchUserPerformance = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/performance`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user performance:", error);
    return mockedData.UserPerformance[0];
  }
};

// Export all functions
export default {
  fetchUserData,
  fetchUserActivity,
  fetchUserPerformance,
  fetchUserSessions,
};
