import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../../../servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent implements OnInit{
  formularioDeEmpleados: FormGroup;
 

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router,
    private formBuilder:FormBuilder
  ){


    this.formularioDeEmpleados=this.formulario.group({
      id_cargo:[''],
      ci:[''],
      nombre:[''],
      paterno:[''],
      materno:[''],
      direccion:[''],
      telefono:[''],
      Fecha_Nacimiento:[''],
      genero:[''],
      intereses:[''],
    });

  }

  ngOnInit(): void { 
    
  }

  enviarDatos(): any{
    console.log("Me presionaste");
    console.log(this.formularioDeEmpleados.value);
    this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe();
    this.ruteador.navigateByUrl('/listar-empleado')
  }
}
