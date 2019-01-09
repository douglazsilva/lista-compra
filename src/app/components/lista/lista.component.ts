import { Component, OnInit } from '@angular/core';
import { ConexaoService } from 'src/app/servicos/conexao.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items:any;
  updatedItem:any={
    name: ''
  }

  constructor(private conexao:ConexaoService) { 
    this.conexao.listaItem().subscribe(item=>{
      this.items = item;
      console.log(this.items)
    })
  }

  ngOnInit() {
  }

  delete(item){
    this.conexao.deleteItem(item);
  }

  update(item){
    this.updatedItem = item;
  }

  addUpdatedItem(){
    this.conexao.updateItem(this.updatedItem);
  }
}
