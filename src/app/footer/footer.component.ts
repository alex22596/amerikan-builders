import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CurrentLanguageService } from './../current-language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService,
    private currentLangService: CurrentLanguageService) {
    translate.setDefaultLang('en');
  }

  switchLanguage() {
    this.currentLangService.currentLang = this.currentLangService.currentLang === 'en' ? 'es' : 'en';
    this.translate.use(this.currentLangService.currentLang);
  }

  ngOnInit() {
  }

}
