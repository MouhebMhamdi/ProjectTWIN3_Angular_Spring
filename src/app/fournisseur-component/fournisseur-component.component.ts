import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent implements OnInit {
  idFournisseur:number;
  code:string;
  libelle:string;
  hide:boolean;

  constructor() { }

  ngOnInit(): void {
    this.hide=false;
    this.idFournisseur=105;
    this.code="A104B89";
    this.libelle="MyTeck";

  }

  changeHide(){
    this.hide=true;
  }
  changeHideTrue(){
    this.hide=false;
  }
}
