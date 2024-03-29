import http from "../../axios/http-common";

const register = (data) => {
  return http.post("/public/user/signup", { ...data });
};

const login = (data) => {
  return http.post("/public/user/signin", { ...data }).then((response) => {
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getAll = (params) => {
  return http.get("/security/users", { params });
};
const get = (id) => {
  return http.get(`/private/user/${id}`);
};
const getByUsername = (username) => {
  return http.get(`/private/user/username/${username}`);
};
const getOtherRoles = (id) => {
  return http.get(`/security/user/${id}/otherroles`);
};

const update = (id, data) => {
  return http.put(`/security/user/update/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/security/user/delete/${id}`);
};

const removeAll = () => {
  return http.delete(`/security/user`);
};

const assignRole = (userId, roleId) => {
  return http.get(`/security/role/assign/${userId}/${roleId}`);
};
const unassignRole = (userId, roleId) => {
  return http.get(`/security/role/unassign/${userId}/${roleId}`);
};

const findByTitle = (title) => {
  return http.get(`/security/user?title=${title}`);
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
  getAll,
  get,
  update,
  remove,
  removeAll,
  findByTitle,
  getOtherRoles,
  assignRole,
  unassignRole,
  getByUsername,
};

export default authService;
