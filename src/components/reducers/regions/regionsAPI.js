export const fetchRegionsAPI = async () => {
  const response = await fetch("https://localhost:7213/api/Regions");
  const data = await response.json();
  return data;
};

export const fetchRegionAPI = async (regionId) => {
  const response = await fetch(
    `https://localhost:7213/api/Regions/${regionId}`
  );
  const data = await response.json();
  return data;
};

export const addRegionAPI = async (region) => {
  const response = await fetch("https://localhost:7213/api/Regions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(region),
  });

  const data = await response.json();
  return data;
};

export const updateRegionAPI = async (updatedRegion) => {
  const response = await fetch(
    `https://localhost:7213/api/Regions/${updatedRegion.regionId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRegion),
    }
  );

  const data = await response.json();
  return data;
};

export const deleteRegionAPI = async (id) => {
  await fetch(`https://localhost:7213/api/Regions/${id}`, {
    method: "delete",
  });
};
