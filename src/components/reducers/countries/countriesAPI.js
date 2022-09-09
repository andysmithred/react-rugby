export const fetchCountriesAPI = async () => {
  const response = await fetch("https://localhost:7213/api/Countries");
  const data = await response.json();
  return data;
};

export const fetchCountryAPI = async (countryId) => {
  const response = await fetch(
    `https://localhost:7213/api/Countries/${countryId}`
  );
  const data = await response.json();
  return data;
};
