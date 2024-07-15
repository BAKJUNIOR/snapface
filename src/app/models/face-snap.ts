export class FaceSnap {

  location?: string;
  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public like: number) {}

  addSnap(): void {
    this.like++;
  }

  removeSnap(): void {
    this.like--;
  }

  setLocation(location: string): void {
    this.location = location;
  }
}
