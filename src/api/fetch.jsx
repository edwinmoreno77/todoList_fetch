// -------------  USER FUNCTION  -----------------

const url = "https://playground.4geeks.com/todo/";

export const createUser = async (name) => {
  try {
    const response = await fetch(`${url}users/${name.name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error capturado en el fetch, 'createUser'", error);
  }
};

export const loginUser = async (user) => {
  try {
    const response = await fetch(`${url}users/${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error capturado en el fetch, 'loginUser' ", error);
  }
};

// -------------  TODO FUNCTION  -----------------

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${url}todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    console.log(`task ${id} delete`);

    return response.ok;
  } catch (error) {
    console.log("Error capturado en el fetch 'deleteTask' ", error);
  }
};

export const createTask = async (user, task) => {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/todo/todos/${user.name}`,
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error capturado en el fetch, 'createUser'", error);
  }
};

export const updateTask = async (id, task) => {
  try {
    const response = await fetch(`${url}todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    console.log(`task ${id} updated`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error capturado en el fetch 'updateTask' ", error);
  }
};
