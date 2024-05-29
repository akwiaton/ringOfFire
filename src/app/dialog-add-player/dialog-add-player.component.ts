import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
import { MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [FormsModule, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatInputModule, MatDialogModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name: string = '';
  // dialogRef: any;
  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {
    
   
  }

onNoClick(): void {
  this.dialogRef.close();
}

}
