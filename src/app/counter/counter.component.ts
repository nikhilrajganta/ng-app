import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  like = 0;
  disLike = 0;
  maxValue = 20;
clickIn() {
  {this.like += 1;}
}

clickDe() {
  {  this.disLike += 1;
    // this.increase -= 1;
    // this.decraese += 1
  }
}


}
