import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {

  heroes: string[] = ["Spidermna","Ironman","Hull","Captain america", "Thor", "She hulk"];
  deletedHero?: string = "";

  removeLastHero(): void {
    this.deletedHero = this.heroes.pop();
  }
}
