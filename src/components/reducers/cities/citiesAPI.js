export const fetchCitiesAPI = async () => {
  const response = await fetch("https://localhost:7213/api/Cities");
  const data = await response.json();
  return data;
};
