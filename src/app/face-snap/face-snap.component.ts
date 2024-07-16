import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  NgClass,
  NgIf,
  NgStyle, PercentPipe,
  TitleCasePipe,
  UpperCasePipe
} from "@angular/common";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    // NgIf permet d'afficher ou de masquer des éléments du DOM en fonction d'une condition.
    NgIf,
    // DatePipe permet de formater les dates dans les templates Angular.
    DatePipe,
    // NgStyle permet d'appliquer des styles CSS dynamiquement aux éléments du DOM.
    NgStyle,
    // NgClass permet d'ajouter ou de supprimer des classes CSS dynamiquement aux éléments du DOM.
    NgClass,
    // LowerCasePipe permet de convertir une chaîne de caractères en minuscules.
    LowerCasePipe,
    // UpperCasePipe permet de convertir une chaîne de caractères en majuscules.
    UpperCasePipe,
    // TitleCasePipe permet de convertir une chaîne de caractères en format "Title Case" (première lettre de chaque mot en majuscule).
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],

  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent implements OnInit{

  //propriété de component injectable depuis son parent ?
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService:FaceSnapsService) {}

  likeButtonText!:string;
  userHasSnapped!: boolean;
  myLargeNumber:number = 4857927.18;
  myPourcentage:number = 0.337

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
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id , "unlike");
    this.likeButtonText = 'Oh dislike! ';
    this.userHasSnapped = false;
  }

  addlike():void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id , "addlike");
    this.likeButtonText = 'Oops, like!';
    this.userHasSnapped = true;
  }
}
