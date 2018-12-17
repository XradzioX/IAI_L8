import { Component } from '@angular/core';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {BlogComponent} from "./components/blog/blog.component";
import {MapComponent} from "./components/map/map.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'quit',
    component: QuizComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'Navbar',
    component:NavBarComponent,
  }];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
}
