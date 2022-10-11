export const fetchSchoolsAPI = async () => {
  const response = await fetch("https://localhost:7213/api/Schools");
  const data = await response.json();
  return data;
};

export const fetchSchoolAPI = async (schoolId) => {
  const response = await fetch(
    `https://localhost:7213/api/Schools/${schoolId}`
  );
  const data = await response.json();
  return data;
};

export const addSchoolAPI = async (school) => {
  const response = await fetch("https://localhost:7213/api/Schools", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(school),
  });

  const data = await response.json();
  return data;
};

export const updateSchoolAPI = async (updatedSchool) => {
  const response = await fetch(
    `https://localhost:7213/api/Schools/${updatedSchool.schoolId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSchool),
    }
  );

  const data = await response.json();
  return data;
};

export const deleteSchoolAPI = async (id) => {
  await fetch(`https://localhost:7213/api/Schools/${id}`, {
    method: "delete",
  });
};
