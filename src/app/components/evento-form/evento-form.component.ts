import { NgIf } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-evento-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {
  @Input() btnText!: string;

  eventoForm!: FormGroup;
  formSubmitted = false;

  constructor() {}

  ngOnInit(): void {
    this.eventoForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title() {
    return this.eventoForm.get('title')!;
  }

  get description() {
    return this.eventoForm.get('description')!;
  }

  submit() {
    this.formSubmitted = true;

    if (this.eventoForm.valid) {
      console.log("Formulário enviado com sucesso:", this.eventoForm.value);
    } else {
      console.log("Formulário inválido");
    }
  }
}
