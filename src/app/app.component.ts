import { Component } from '@angular/core';
import { Entidad } from './models/entidad';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntidadServices } from './services/entidad.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaEntidad : Entidad [] = [];
  buscarFor: FormGroup;
  show = true;
  constructor(private _entidadservices: EntidadServices,
              private fb: FormBuilder) {
                this.buscarFor = this.fb.group({
                 monto: ['']
                })
               }
  ngOnInit(): void {
    this.obtenerentidad();
  }

  buscaId(){
    this._entidadservices.getEntidadId(this.buscarFor.get('monto')?.value).subscribe(data => {
      if(Object.keys(data).length === 0){

      }else{
        this.listaEntidad = data;
        console.log(data);
        this.show=false;
      } 
    },error =>{
      console.log(error);
    })
    
  }

  obtenerentidad(){
    console.log("Hol");
    this._entidadservices.getEntidad().subscribe( data => {
      console.log(data);
      this.listaEntidad = data;
    }, error => {
      console.log(error);
    })
  }
  todo(){
    
    this.obtenerentidad();
    this.show=true;
    this.obtenerentidad();
  }

}