import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap";
import {FaceSnapComponent} from "../face-snap/face-snap.component";
import {NgForOf} from "@angular/common";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent,
    NgForOf
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService:FaceSnapsService) {}
  ngOnInit(): void {

    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  }

}
