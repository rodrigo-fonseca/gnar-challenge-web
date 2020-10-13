import RequestCoreService from 'services/core/RequestCoreService'

class UploadsResourceService {
  private resource = 'uploads/'
  private request: RequestCoreService

  constructor() {
    this.request = new RequestCoreService()
  }

  create(file: any): Promise<any> {
    return this.request.post(this.resource, file)
  }

  get(id?: number): Promise<any> {
    let resource = this.resource
    if (id) resource += `${id}`

    return this.request.get(resource)
  }
}

export default UploadsResourceService
