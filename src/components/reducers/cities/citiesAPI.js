export const fetchCitiesAPI = async () => {
  const response = await fetch("https://localhost:7213/api/Cities");
  const data = await response.json();
  return data;
};

export const fetchCityAPI = async (cityId) => {
  const response = await fetch(`https://localhost:7213/api/Cities/${cityId}`);
  const data = await response.json();
  return data;
};

export const addCityAPI = async (city) => {
  const response = await fetch("https://localhost:7213/api/Cities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(city),
  });

  const data = await response.json();
  return data;
};

export const updateCityAPI = async (updatedCity) => {
  const response = await fetch(`https://localhost:7213/api/Cities/${updatedCity.cityId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCity),
  });

  const data = await response.json();
  return data;
};

export const deleteCityAPI = async (id) => {
  await fetch(`https://localhost:7213/api/Cities/${id}`, {
    method: "delete",
  });
};
