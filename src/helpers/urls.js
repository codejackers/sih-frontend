const API_ROOT = process.env.REACT_APP_API_URL;

export const APIUrls = {
  getAllCollege: () => `${API_ROOT}/college/list`,
  filterCollege: () => `${API_ROOT}/college/list`,
  getCollege: (name) => `${API_ROOT}/college/list?collegename=${name}`,
  registerCollege: () => `${API_ROOT}/college/newRegister`,
  loginCollege: () => `${API_ROOT}/college/login`,
  CollegeDetails: () => `${API_ROOT}/college`,
  sendOtp: () => `${API_ROOT}/college/sendotp`,
  verifyOtp: () => `${API_ROOT}/college/verifyotp`,
  updatePassword: () => `${API_ROOT}/college/updatePassword`,
  updateCollege: () => `${API_ROOT}/college/updateCollege`,
  createCourse: () => `${API_ROOT}/course/createCourse`,
  deleteCourse: () => `${API_ROOT}/course/deleteCourse`,
  captchaVerify: () => `${API_ROOT}/captchaVerify`,
  reportQuery: () => `${API_ROOT}/query/createQuery`,
  saveNotification: () => `${API_ROOT}/add/notification`,
  deleteNotification: () => `${API_ROOT}/delete/notification`,
};
