import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EnvioReceptorService } from '../service/envio-receptor.service';
import { Personaje } from '../interface/personaje';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user: Personaje = {name:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"};

  list: Personaje[]=
  [
    {name:'Erick Cobos', uuid:"10131238821388123881230", email:"correo1@gmail.com"},
    {name:'Aldahir Malpica', uuid:"21131238821388123881231", email:"correo2@hotmail.com"},
    {name:'Juan Perez', uuid:"32131238821388123881232", email:"correo3@live.com"}
  ];


  constructor(
    private router: Router,
    private envioReceptor: EnvioReceptorService
  ) { }

  ngOnInit() {
  }

  gotReceiver(){
    this.envioReceptor.sendObjectSource(this.user);
    this.envioReceptor.sendListSource(this.list);

    this.router.navigate(['/main/receptor']);
  }
  

}
