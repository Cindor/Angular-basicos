import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListadoComponent } from '../Heroes/listado/listado.component';
import { ContadorComponentes } from './contador/contador.component';




@NgModule ({
    declarations: [
        ContadorComponentes,
    ],
    exports: [
        ContadorComponentes,
    ],
    imports: [
        CommonModule
    ]

})

export class contadorModule {} 