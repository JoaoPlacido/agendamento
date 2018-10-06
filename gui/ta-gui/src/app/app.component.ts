import { Component } from '@angular/core';
import {NgModule} from '@angular/core';

import {Paciente} from './paciente';
import {PacienteService} from './paciente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paciente: Paciente={nome:"",cpf:"",idade:0,rg:"",data:""};
  pacienteService=new PacienteService;
  gravar(a:Paciente):void{
    this.pacienteService.gravar(a);
    this.paciente={nome:"",cpf:"",idade:0,rg:"",data:""};
  }
}

