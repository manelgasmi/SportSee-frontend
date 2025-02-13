import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Replace with your actual API URL

// Fetch user basic information
const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
    const userData = response.data.data;
    userData.score = userData.todayScore ? userData.todayScore : userData.score;
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

// Fetch user activity (e.g., daily calorie burn, weight tracking)
const fetchUserActivity = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user activity:", error);
    return null;
  }
};

// Fetch user performance (e.g., endurance, speed, strength)
const fetchUserPerformance = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/performance`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user performance:", error);
    return null;
  }
};

// Export all functions
export default {
  fetchUserData,
  fetchUserActivity,
  fetchUserPerformance,
};
