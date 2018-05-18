import { http } from "./utils";

export function getMe() {
  return http.get("/api/my-account");
}

export function getUser(username) {
    return http.get(`/api/${username}`);
  }

export function getScore(username) {
  return http.get(`/api/compare/${username}`);
}

