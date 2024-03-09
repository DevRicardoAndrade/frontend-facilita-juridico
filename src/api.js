const api = {};
const BASE_URL = "http://127.0.0.1:8080";
const headers = {
  "Content-Type": "application/json",
};
api.get = async (endpoint, payload, headersCustom = {}) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "GET",
    headers,
    body: JSON.stringify(payload),
  });

  return await res.json();
};

api.post = async (endpoint, payload, headersCustom = {}) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
  return await res.json();
};

api.put = async (endpoint, payload, headersCustom = {}) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "PUT",
    headers,
    body: JSON.stringify(payload),
  });

  return await res.json();
};

api.delete = async (endpoint, payload, headersCustom = {}) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "DELETE",
    headers,
    body: JSON.stringify(payload),
  });

  return await res.json();
};

export default api;
