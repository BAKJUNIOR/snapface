import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  NgClass,
  NgIf,
  NgStyle, PercentPipe,
  UpperCasePipe
} from "@angular/common";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
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
    CurrencyPipe,
    RouterLink
  ],

  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.css'
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap;
  likeButtonText!:string;
  userHasSnapped!: boolean;
  myLargeNumber:number = 4857927.18;
  myPourcentage:number = 0.337

  constructor(private faceSnapsService:FaceSnapsService,
              private route : ActivatedRoute) {}

  ngOnInit():void {
    this.getFaceSnap();
    this.prepareInterface();

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


  private prepareInterface(){
    this.likeButtonText = 'like';
    this.userHasSnapped = false;
  }
  private getFaceSnap(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

}
