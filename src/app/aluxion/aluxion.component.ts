import { Component, OnInit } from '@angular/core';
import { Footer, Info, Menu } from '../interfaces/interfaces';

@Component({
  selector: 'app-aluxion',
  templateUrl: './aluxion.component.html',
  styleUrls: ['./aluxion.component.scss']
})
export class AluxionComponent implements OnInit {

  producto : Array<Info>=[
    {nombre : 'Michael W.Dreeben',
     titulo : 'Shell Dining Chair',
     descripcion : 'Lorem ipsum dolor sit amet, consectetur adispiscing elit. Est apreiam quos totam blanditiis sapiente sit, quasi non excepturi architecto dolorem?',
     imagen : '/assets/silla_negra.png',
     enlace : '#SILLA',
     codigo : 1
    },
    {nombre : 'Jeaper K.Thomas',
    titulo : 'Dunes Anthrazite Black',
    descripcion : 'Lorem ipsum dolor sit amet, consectetur adispiscing elit. Est apreiam quos totam blanditiis sapiente sit, quasi non excepturi architecto dolorem?',
    imagen : '/assets/mesa_negra.png',
    enlace : '#MESA',
    codigo : 2
    }
  ]
  menu  : Array<Menu>=[
    { seccion   : 'Collection',
      categoria : ['Furniture', 'Lighting', 'Accesories'],
      imagenes  : ['assets/sofa_blanco.png', 'assets/silla_negra.png', 'assets/mesa_negra.png']
    },
    { seccion   : 'Design',
      categoria : ['Category 1', 'Categoría 2', 'Category 3'],
      imagenes  : ['assets/sofa_blanco.png', 'assets/silla_negra.png', 'assets/mesa_negra.png']
    },
    { seccion   : 'Craftmanship',
      categoria : ['Category 1', 'Categoría 2', 'Category 3'],
      imagenes  : ['assets/sofa_blanco.png', 'assets/silla_negra.png', 'assets/mesa_negra.png']
    },
    { seccion   : 'Ethics',
      categoria : ['Category 1', 'Categoría 2', 'Category 3'],
      imagenes  : ['assets/sofa_blanco.png', 'assets/silla_negra.png', 'assets/mesa_negra.png']
    },
  ] 
  footer : Array<Footer>=[
    { titulo : 'About',
      enlace : '#About'
    },
    { titulo : 'Contact',
      enlace : '#Contact'
    },
    { titulo : 'Dealers',
      enlace : '#Dealers'
    },
    { titulo : 'News',
      enlace : '#News'
    },
    { titulo : 'Care',
      enlace : '#Care'
    },
    { titulo : 'Press',
      enlace : '#Press'
    }
  ]
  translateY    : number = 0
  isActive      : boolean = false
  activeSection : boolean = false
  posicion      : number = 0
  fotos         : number = this.menu.length
  posicionCategoria : number = -1

  constructor() { }
  ngOnInit(): void {
  }
  
  
  cambiarValor( posicion : number ) : void{
    this.translateY = posicion
  }
  cambiarTranslateY() : string{
    return `translateY(${(this.translateY*-100)}%)`
  }
  cambiarActive() : void{
    this.isActive = !this.isActive
  }
  cambiarActiveSection( posicion : number) : void{
    this.activeSection = !this.activeSection
    this.posicion = posicion
  }
  quitarActiveSection() : void{
    this.activeSection = !this.activeSection
    this.posicion = 0
  }
  foticos() : number{
    return this.menu[this.posicion].imagenes.length
  }
  movimiento() : string {
    return `translateY(-${(this.posicionCategoria * 100/this.foticos())}%)`
  } 
  cambiarPosicionCategoria( posicion : number){
    this.posicionCategoria = posicion
  }
  quitarPosicionCategoria( ){
    this.posicionCategoria = -1
  }
}
