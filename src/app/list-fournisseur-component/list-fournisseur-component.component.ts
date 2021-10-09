import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../model/fournisseur';

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent implements OnInit {
  list: Fournisseur[];
  constructor() { }
  x:number=1;
  r:boolean;
  ngOnInit(): void {
    this.list=[
      {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
      {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
      {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
      {idFournisseur:400,code:"40ABC452",libelle:"asus"}
    ]
  }
  delete(fournisseur:Fournisseur){
    this.r=confirm("Do u want to delete a provider !?");
    if(this.r){
      let i = this.list.indexOf(fournisseur);
      this.list.splice(i,1);
      alert("provider deleted succesfully");
    
    }
    
  }

}
