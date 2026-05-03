const BASE_URL = "http://localhost:5001/tasks";

export const getTasks = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addTaskAPI = async (task) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const deleteTaskAPI = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};

export const updateTaskAPI = async (id, updatedTask) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });
  return res.json();
};