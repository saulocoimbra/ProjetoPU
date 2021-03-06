import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api: string = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  RegistraCliente(dados) {
    return this.http.post(`${this.api}register`, dados).toPromise();
  }

  RegistraEntregador(dados) {
    return this.http.post(`${this.api}register-deliverer`, dados).toPromise();
  }

  LoginCliente(dados) {
    return this.http.post(`${this.api}login-client`, dados).toPromise();
  }

  LoginEntregador(dados) {
    return this.http.post(`${this.api}login-deliverer`, dados).toPromise();
  }

  RecuperacaoSenhaCliente(dados) {
    return this.http.post(`${this.api}forget-client`, dados).toPromise();
  }

  RecuperacaoSenhaEntregador(dados) {
    return this.http.post(`${this.api}forget-deliverer`, dados).toPromise();
  }

  ClientDashboard(dados) {
    // ('Authorization','Bearer '+ localStorage.getItem('Bearer_token'));
    let token = 'Bearer ' + dados;
    let headers = new HttpHeaders({ Authorization: token });

    return this.http
      .get(`${this.api}client-dashboard`, { headers: headers })
      .toPromise();
  }

  DelivererDashboard(dados) {
    let token = 'Bearer ' + dados;
    let headers = new HttpHeaders({ Authorization: token });

    return this.http
      .get(`${this.api}deliverer-dashboard`, { headers: headers })
      .toPromise();
  }

  EditClient(dados) {
    let token = localStorage.getItem('token');
    let bearerToken = 'Bearer ' + token;
    let headers = new HttpHeaders({ Authorization: bearerToken });
    return this.http
      .post(`${this.api}edit-client`, dados, { headers: headers })
      .toPromise();
  }

  EditDeliverer(dados) {
    let token = localStorage.getItem('token');
    let bearerToken = 'Bearer ' + token;
    let headers = new HttpHeaders({ Authorization: bearerToken });
    return this.http
      .post(`${this.api}edit-deliverer`, dados, { headers: headers })
      .toPromise();
  }

  LogoutCliente(id, bearer) {
    let token = 'Bearer ' + bearer;
    let headers = new HttpHeaders({ Authorization: token });
    return this.http
      .post(`${this.api}logout-client/${id}`, null, { headers: headers })
      .toPromise();
  }

  LogoutEntregador(id, bearer) {
    let token = 'Bearer ' + bearer;
    let headers = new HttpHeaders({ Authorization: token });
    return this.http
      .post(`${this.api}logout-deliverer/${id}`, null, { headers: headers })
      .toPromise();
  }

  RegistraEntrega(dados, bearer: string) {
    let token = 'Bearer ' + bearer;
    let headers = new HttpHeaders({ Authorization: token });
    return this.http
      .post(`${this.api}new-delivery`, dados, { headers: headers })
      .toPromise();
  }

  AceitaEntrega(id) {
    let token = localStorage.getItem('token');
    let bearerToken = 'Bearer ' + token;
    let headers = new HttpHeaders({ Authorization: bearerToken });

    return this.http
      .post(`${this.api}accept/${id}`, null, { headers: headers })
      .toPromise();
  }
}
