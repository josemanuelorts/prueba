import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category';
import { WikiService } from '../services/wiki.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() theCategory: Category = new Category();
  @Input() selected: boolean = false;
  @Output() clicked = new EventEmitter<string>();
  articles: any[] = [];

  constructor(private wikiSrv: WikiService, private router: Router) {}

  onCategoryClicked() {
    this.clicked.emit(this.theCategory.name);
    this.getArticles(this.theCategory.name);
  }

  getArticles(category: string) {
    this.wikiSrv.getAllArticles(category).subscribe((result: any) => {
      this.articles = result.results;
    });
  }

  onArticleClicked(article: any) {
    this.router.navigate(['/wiki/article', this.theCategory.name, article.id]);
  }
}
