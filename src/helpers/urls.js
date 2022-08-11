const API_ROOT = process.env.REACT_APP_API_URL;

export const APIUrls = {
  getAllCollege: () => `${API_ROOT}/college/list`,
  getCollege: (name) => `${API_ROOT}/college/list?collegename=${name}`,
  registerCollege: () => `${API_ROOT}/college/register`,
};
