import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proj-dialog',
  templateUrl: './proj-dialog.component.html',
  styleUrls: ['./proj-dialog.component.css']
})
export class ProjDialogComponent implements OnInit {
  faClose = faTimes;
  faGithub = faGithub;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<any>) {}

  ngOnInit(): void {
    this.dialogRef.updateSize('60%', '70%');
  }

}
