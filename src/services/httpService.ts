export class HttpService {

  constructor(private baseUrl: string) { }

  async get(path: string, url?: string) {
    return fetch(url ?? `${this.baseUrl}${path}`).then((res) => res.json());
  }
}
