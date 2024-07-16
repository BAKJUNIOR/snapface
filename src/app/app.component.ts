import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {RouterOutlet} from "@angular/router";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgForOf,
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
