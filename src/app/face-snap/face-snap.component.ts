import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent implements OnInit{

  //propriété de component injectable depuis son parent ?
  @Input() faceSnap!: FaceSnap;

  likeButtonText!:string;
  userHasSnapped!: boolean;


  ngOnInit():void {

    this.likeButtonText = 'like';
    this.userHasSnapped = false
  }



  onlike(): void {
    if (this.userHasSnapped) {
      this.unlike();
    } else {
      this.addlike();
    }
  }

  unlike():void {
    this.faceSnap.addSnap();
    this.likeButtonText = 'Oh dislike!';
    this.userHasSnapped = false;
  }

  addlike():void {
    this.faceSnap.removeSnap();
    this.likeButtonText = 'Oops, like!';
    this.userHasSnapped = true;
  }
}
