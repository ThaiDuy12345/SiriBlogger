import { HttpClient } from '@angular/common/http';
import api from './API';
class service {
  constructor(private http: HttpClient) {}

  checkAccountIfValidate = async (accountId: string | null): Promise<Boolean> => {
    let response: any = await this.http.get(`${api.getAnAccountById}${accountId}`).toPromise()
    if(response && response._id === accountId){
      return true
    }
    return false

  }

}

export default service
