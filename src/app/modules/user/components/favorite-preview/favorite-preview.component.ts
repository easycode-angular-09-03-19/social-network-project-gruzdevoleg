import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorite-preview',
  templateUrl: './favorite-preview.component.html',
  styleUrls: ['./favorite-preview.component.css']
})

export class FavoritePreviewComponent implements OnInit {
  @Input() photo: object;
  constructor() { }

  ngOnInit() {
  }

}
