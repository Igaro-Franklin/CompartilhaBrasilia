import { Component } from '@angular/core';
import { EventoFormComponent } from "../../evento-form/evento-form.component";

@Component({
  selector: 'app-novo-evento',
  imports: [EventoFormComponent],
  templateUrl: './novo-evento.component.html',
  styleUrl: './novo-evento.component.css'
})
export class NovoEventoComponent {
  btnText = "Compartilhar!"
}
