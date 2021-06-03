import { environment } from "src/environments/environment"

const API = environment.api;
export const urls = {
  users: `${API}/users`,
  posts: `${API}/posts`
}
