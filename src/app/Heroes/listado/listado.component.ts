import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[] = ["Spiderman", "Hulk", "Goku", "Gogetta"]

  agregado: string = '';

  borrar() {
    console.log("borrando....");
    this.agregado = this.heroes.shift() || "";
  }
}
