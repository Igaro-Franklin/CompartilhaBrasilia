import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evento-form',
  imports: [],
  templateUrl: './evento-form.component.html',
  styleUrl: './evento-form.component.css'
})
export class EventoFormComponent {
  @Input() btnText!: String

  constructor(){

  }

  ngOnInit(): void{

  }
}
