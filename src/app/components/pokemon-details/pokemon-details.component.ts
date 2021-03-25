import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: any;

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.pokemon = this.config.data.pokemon;
  }

}
