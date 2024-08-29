export const createUser = async (name) => {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/todo/users/${name}`,
      {
        method: "POST",
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
    console.log("Error capturado en el fetch", error);
  }
};

export const loginUser = async (user) => {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/todo/users/${user}`,
      {
        method: "GET",
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
    console.log("Error capturado en el fetch", error);
  }
};
