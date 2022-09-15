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

export const addCountryAPI = async (country) => {
  const response = await fetch("https://localhost:7213/api/Countries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(country),
  });

  const data = await response.json();
  return data;
};

export const updateCountryAPI = async (updatedCountry) => {
  const response = await fetch(
    `https://localhost:7213/api/Countries/${updatedCountry.countryId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCountry),
    }
  );

  const data = await response.json();
  return data;
};

export const deleteCountryAPI = async (id) => {
  await fetch(`https://localhost:7213/api/Countries/${id}`, {
    method: "delete",
  });
};
