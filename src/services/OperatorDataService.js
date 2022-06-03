import http from "../http-common";
class OperatorDataService {
  getAll() {
    return http.get("/operators");
  }
  get(id) {
    return http.get(`/operators/${id}`);
  }
  create(data) {
    return http.post("/operators", data);
  }
  update(id, data) {
    return http.put(`/operators/${id}`, data);
  }
  delete(id) {
    return http.delete(`/operators/${id}`);
  }
  deleteAll() {
    return http.delete(`/operators`);
  }
  findByTitle(title) {
    return http.get(`/operators?title=${title}`);
  }
}
export default new OperatorDataService();