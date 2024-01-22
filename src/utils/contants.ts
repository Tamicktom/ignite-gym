export const API_URL = "http://192.168.100.10:3333/";

export function apiRoute(url: string): string {
  if (url.startsWith("/")) {
    return API_URL + url.substring(1);
  }
  return API_URL + url;
}