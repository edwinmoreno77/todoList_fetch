const url = "https://playground.4geeks.com/todo/";
const headers = {
  "Content-Type": "application/json",
};

// ------------- FETCH FUNCTION FOR USERS -----------------

export const createUser = async (name) => {
  try {
    const response = await fetch(`${url}users/${name}`, {
      method: "POST",
      headers,
    });

    if (response.statusText == "Bad Request") {
      const data = await response.json();
      return data;
    }

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error capturado en el fetch, 'createUser'", error);
    return { error: error.message };
  }
};

export const loginUser = async (user) => {
  try {
    const response = await fetch(`${url}users/${user}`, {
      method: "GET",
      headers,
    });

    if (response.statusText == "Not Found") {
      const data = await response.json();
      return data;
    }

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error capturado en el fetch, 'loginUser' ", error);
    return { error: error.message };
  }
};

// ------------- FETCH FUNCTION FOR TODOS -----------------

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${url}todos/${id}`, {
      method: "DELETE",
      headers,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.ok;
  } catch (error) {
    console.log("Error capturado en el fetch 'deleteTask' ", error);
    return { error: error.message };
  }
};

export const createTask = async (user, task) => {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/todo/todos/${user.name}`,
      {
        method: "POST",
        body: JSON.stringify(task),
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error capturado en el fetch, 'createUser'", error);
    return { error: error.message };
  }
};

export const updateTask = async (id, task) => {
  try {
    const response = await fetch(`${url}todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error capturado en el fetch 'updateTask' ", error);
    return { error: error.message };
  }
};
