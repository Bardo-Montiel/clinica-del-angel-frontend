const BASE_URL = "http://localhost:4000";
const headers = { "Content-Type": "application/json" };

//función para registrar a un usuario
async function register(data) {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
    const resBody = await res.json();
    if (!res.ok) {
      throw new Error(resBody.message || "Error al registrarse");
    }
    return resBody;
  } catch (error) {
    throw error;
  }
}

//función para autorizar a un usario
async function authorize(data) {
  try {
    const res = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const resBody = await res.json();
    if (!res.ok) {
      throw new Error(resBody.message || "Error al ingresar");
    }
    return resBody;
  } catch (error) {
    throw error;
  }
}

//función para guardar el token
function saveToken(token) {
  localStorage.setItem("token", token);
}

//función para obtener el token guardado
function getToken() {
  return localStorage.getItem("token");
}

//función para eliminar el token guardado
function removeToken() {
  return localStorage.removeItem("token");
}

export { register, authorize, saveToken, getToken, removeToken };
