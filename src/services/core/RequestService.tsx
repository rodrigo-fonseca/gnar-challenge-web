import axios from 'axios'

class RequestCoreService {
  headers: any

  post(resource: string, data?: any): Promise<any> {
    this.setHeaders()

    const { headers } = this
    const method = 'post'

    return this._request({
      resource,
      headers,
      method,
      data,
    })
  }

  put(resource: string, data: any): Promise<any> {
    this.setHeaders()

    const { headers } = this
    const method = 'put'

    return this._request({
      resource,
      headers,
      method,
      data,
    })
  }

  get(resource: string): Promise<any> {
    this.setHeaders()

    const { headers } = this
    const method = 'get'

    return this._request({
      resource,
      headers,
      method,
    })
  }

  remove(resource: string): Promise<any> {
    this.setHeaders()

    const { headers } = this
    const method = 'delete'

    return this._request({
      resource,
      headers,
      method,
    })
  }

  postWithoutAuthorization(resource: string, data: any): Promise<any> {
    this.setHeadersWithoutAuthorization()

    const { headers } = this
    const method = 'post'

    return this._request({
      resource,
      headers,
      method,
      data,
    })
  }

  async _request({ resource, data, method, headers }: any): Promise<any> {
    const params: any = {
      url: `${process.env.REACT_APP_API}/${resource}`,
      method,
      headers,
      timeout: 10000,
    }

    if (data) params.data = data

    return axios(params)
      .then((res: any) => res.data)
      .catch((err: any) => {
        if (!err.response) {
          const response = { data: { status: 'timeout' } }
          return Promise.reject(response)
        }

        const { response } = err
        return Promise.reject(response.data)
      })
  }

  setHeaders({
    Accept = 'application/json',
    ContentType = 'application/json',
  } = {}) {
    this.headers = {
      Accept,
      'Content-Type': ContentType,
    }
  }

  setHeadersWithoutAuthorization({
    Accept = 'application/json',
    ContentType = 'application/json',
  } = {}) {
    this.headers = {
      Accept,
      'Content-Type': ContentType,
    }
  }
}

export default RequestCoreService
