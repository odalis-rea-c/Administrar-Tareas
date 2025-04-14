import { Component } from '@angular/core';
import { tareas } from '../../interface/tareas';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-tareas',
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
nombreTarea!:string;
listaTarea:tareas[] = [];                                                     

guardarTarea(){
  const tarea ={
    nombre: this.nombreTarea,
    tarea:false
  }
  this.listaTarea.push(tarea);
  this.nombreTarea = '';
}

eliminarTarea(index:number){
  this.listaTarea.splice(index, 1);
  console.log(index)
}

actualizarTarea(tarea:tareas, i:number){
  this.listaTarea[i].tarea = !tarea.tarea;
}
}
