import { Component, OnInit } from '@angular/core';
import { CurrentLanguageService } from './../current-language.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  constructor(public currentLangService: CurrentLanguageService) { }

  ngOnInit() {
  }

}
