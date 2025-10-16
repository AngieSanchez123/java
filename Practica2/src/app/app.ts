import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  usuarios: {nombre: String, apellido: String, correo: String}[]=[];
  
  nuevousuario={
    nombre: '',
    apellido: '',
    correo: '',
  };

    agregar(){
      if(this.nuevousuario.nombre.trim() && this.nuevousuario.apellido.trim() && this.nuevousuario.correo.trim()) {
      this.usuarios.push({...this.nuevousuario});
      this.nuevousuario={nombre:'', apellido: '', correo:''};
      }
    }
       
     modificar(usuarios: number) {
    this.nuevousuario = usuarios;
  }
}