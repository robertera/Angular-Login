import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DADOS_FERRAMENTAS } from 'src/assets/dados-ferramentas';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EditarFerramentaComponent } from '../editar-ferramenta/editar-ferramenta.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-ferramentas',
  templateUrl: './lista-ferramentas.component.html',
  styleUrls: ['./lista-ferramentas.component.css'],
})

export class ListaFerramentasComponent implements AfterViewInit  {
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource(DADOS_FERRAMENTAS);
  ferramentaSelecionada: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  removerFerramenta(ferramenta: any): void {
    const index = this.dataSource.data.indexOf(ferramenta);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }
  }

  editarFerramenta(ferramenta: any): void {
    const dialogRef = this.dialog.open(EditarFerramentaComponent, {
      width: '500px',
      data: ferramenta,
    });

        dialogRef.afterClosed().subscribe((resultado: any) => {
          if (resultado) {
            const index = this.dataSource.data.indexOf(ferramenta);
            if (index >= 0) {
              this.dataSource.data[index] = resultado;
              this.dataSource._updateChangeSubscription();
            }
          }
        });
  }

}
