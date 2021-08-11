import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit{

  constructor() {
    
  }

  ngOnInit(): void {
    this.stars();
  }

  public stars(){
    let count = 20;
    let scene = document.querySelector('.scene');
    let i = 0;
    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);

        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = 200 + h + 'px';
        star.style.animationDuration = duration + 's';

        scene!.appendChild(star);
        console.log(scene);
        i++;
    }
  }


}
