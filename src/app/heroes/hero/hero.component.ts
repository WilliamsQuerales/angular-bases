import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizaName(): string {
    return this.name.toUpperCase();
  }

  getheroDescription(): string {
    return `${this.name} - ${this.age}´`;
  }

  setHeroName(): void {
    this.name = this.name == 'Ironman' ? 'Spiderman' : 'Ironman'
  }

  setHeroAge(): void {
    this.age = Math.round(Math.random()*100);
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
