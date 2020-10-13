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
}

export default UploadsResourceService
