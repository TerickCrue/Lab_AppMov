import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { EnvioReceptorService } from '../service/envio-receptor.service';
import { Personaje } from '../interface/personaje';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.page.html',
  styleUrls: ['./receptor.page.scss'],
})
export class ReceptorPage implements OnInit {

  user: Personaje = {};
  list: Personaje[]= [];
  personajes: Personaje[]= [];


  constructor(private envioReceptorService: EnvioReceptorService) { }

  ngOnInit() 
  {

    this.envioReceptorService.$getObjectSource.subscribe(data=>{
      console.log(data);
      this.user = data;
    }).unsubscribe();
    this.envioReceptorService.$getListSource.subscribe(data=>{
      console.log(data);
      this.list = data;
    }).unsubscribe();

    this.envioReceptorService.getPersonajes().subscribe((response: any)=>{
      this.personajes = response.results;
    });

  }

  
}
