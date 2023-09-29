import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-ferramenta',
  templateUrl: './editar-ferramenta.component.html',
  styleUrls: ['./editar-ferramenta.component.css']
})
export class EditarFerramentaComponent {
  editedTool: any;
  originalTool: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditarFerramentaComponent>
  ) {
    this.originalTool = { ...data };
    this.editedTool = { ...data };
  }

  salvarEdicao(): void {
    this.dialogRef.close(this.editedTool);
  }

  fecharModal(): void {
    this.editedTool = { ...this.originalTool };
    this.dialogRef.close();
  }
}
