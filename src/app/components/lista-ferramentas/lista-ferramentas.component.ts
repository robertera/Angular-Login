import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DADOS_FERRAMENTAS } from 'src/assets/dados-ferramentas';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-lista-ferramentas',
  templateUrl: './lista-ferramentas.component.html',
  styleUrls: ['./lista-ferramentas.component.css'],
})

export class ListaFerramentasComponent implements AfterViewInit  {
  displayedColumns: string[] = ['id', 'nome', 'descricao'];
  dataSource = new MatTableDataSource(DADOS_FERRAMENTAS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



}
