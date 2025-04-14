import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareasComponent } from "./components/tareas/tareas.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TareasComponent, NavbarComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-tareas';
}
