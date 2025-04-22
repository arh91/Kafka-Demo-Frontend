import { Component } from '@angular/core';
import { MensajeService } from '../../services/mensaje.service';


@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent {
  mensajes: any = [];
  nuevoMensaje: string = '';

  constructor(private mensajeService: MensajeService) {}

  enviar() {
    this.mensajeService.enviarMensaje(this.nuevoMensaje).subscribe();
  }

  obtenerMensajes() {
    this.mensajeService.listarMensajes().subscribe(data => this.mensajes = data);
  }
}
