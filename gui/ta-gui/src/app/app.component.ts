import { Component } from '@angular/core';
import {NgModule} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paciente: Paciente={nome:"",cpf:"",idade:0,rg:"",data:""};
}
export class Paciente{
  nome: string;
  cpf: string;
  idade: number;
  rg:string;
  data:string;
}
