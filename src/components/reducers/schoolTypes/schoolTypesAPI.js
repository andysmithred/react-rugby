export const fetchSchoolTypesAPI = async () => {
  const response = await fetch("https://localhost:7213/api/SchoolTypes");
  const data = await response.json();
  return data;
};

export const fetchSchoolTypeAPI = async (schoolTypeId) => {
  const response = await fetch(
    `https://localhost:7213/api/SchoolTypes/${schoolTypeId}`
  );
  const data = await response.json();
  return data;
};

export const addSchoolTypeAPI = async (schoolType) => {
  const response = await fetch("https://localhost:7213/api/SchoolTypes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(schoolType),
  });

  const data = await response.json();
  return data;
};

export const updateSchoolTypeAPI = async (updatedSchoolType) => {
  const response = await fetch(
    `https://localhost:7213/api/SchoolTypes/${updatedSchoolType.schoolTypeId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSchoolType),
    }
  );

  const data = await response.json();
  return data;
};

export const deleteSchoolTypeAPI = async (id) => {
  await fetch(`https://localhost:7213/api/SchoolTypes/${id}`, {
    method: "delete",
  });
};
