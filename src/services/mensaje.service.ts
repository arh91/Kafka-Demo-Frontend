import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private apiUrl = 'http://localhost:8080/api/mensajes';

  constructor(private http: HttpClient) { }

  enviarMensaje(mensaje: string) {
    return this.http.post(`${this.apiUrl}/enviar`, mensaje);
  }

  listarMensajes() {
    return this.http.get(`${this.apiUrl}/listar`);
  }
}


