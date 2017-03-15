import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../theme/nga.module';
import { PrimeNGModule } from './primeng.module';

@NgModule({
	exports: [
		CommonModule,
		FormsModule,
    NgaModule,
    PrimeNGModule
	]
})

export class SharedModule {}
