import {SnapType} from "./snap-type.type";

export class FaceSnap {

  location?: string;
  id:string;
  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public like: number) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

  addSnap(): void {
    this.like++;
  }

  unlike(): void {
    this.like--;
  }

  snap(snapType: SnapType) {
    if (snapType === 'addlike') {
      this.addSnap();
    } else if (snapType === 'unlike') {
      this.unlike();
    }
  }

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location:string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}
