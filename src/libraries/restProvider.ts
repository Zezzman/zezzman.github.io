export default class RestProvider {
  initialData: { [key: string]: any }

  constructor(data: { [key: string]: any }) {
    this.initialData = data
  }
  getList: any = () => { }
  getOne: any = () => { }
  getMany: any = () => { }
  getManyReference: any = () => { }
  update: any = () => { }
  updateMany: any = () => { }
  create: any = () => { }
  delete: any = () => { }
  deleteMany: any = () => { }
}