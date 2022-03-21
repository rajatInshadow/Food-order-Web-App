import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Tag } from 'src/app/shared/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?: string[];
  tags?: Tag[];

  @Input()
  justifyContent: string='center';

  constructor(private fs: FoodService) {}

  ngOnInit(): void {
    if (!this.foodPageTags) this.tags = this.fs.getAllTag();
  }
}
