import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';


@NgModule({
	declarations: [
		/* que componentes contiene este módulo */
		HeroeComponent,
		ListadoComponent
	],
	exports: [
		/* Lo que va a ser visible */
		ListadoComponent
	],
	imports: [
		/* solo módulos */
		CommonModule
	]
})


export class HeroesModule {

}