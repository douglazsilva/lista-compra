import { Component, OnInit } from '@angular/core';
import { ConexaoService } from 'src/app/servicos/conexao.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items:any;

  constructor(private conexao:ConexaoService) { 
    this.conexao.listaItem().subscribe(item=>{
      this.items = item;
      console.log(this.items)
    })
  }

  ngOnInit() {
  }

}