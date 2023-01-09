export const fetchCoachesAPI = async () => {
  const response = await fetch("https://localhost:7213/api/Coaches");
  const data = await response.json();
  return data;
};

export const fetchCoachAPI = async (id) => {
  const response = await fetch(`https://localhost:7213/api/Coaches/${id}`);
  const data = await response.json();
  return data;
};

export const addCoachAPI = async (item) => {
  const response = await fetch("https://localhost:7213/api/Coaches", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  const data = await response.json();
  return data;
};

export const updateCoachAPI = async (updatedItem) => {
  const response = await fetch(
    `https://localhost:7213/api/Coaches/${updatedItem.coachId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    }
  );

  const data = await response.json();
  return data;
};

export const deleteCoachAPI = async (id) => {
  await fetch(`https://localhost:7213/api/Coaches/${id}`, {
    method: "delete",
  });
};
