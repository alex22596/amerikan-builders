import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CurrentLanguageService } from './current-language.service';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { MDBSpinningPreloader } from './typescripts/pro/index';
import { SliderComponent } from './slider/slider.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FinanceComponent } from './finance/finance.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RoofingComponent } from './roofing/roofing.component';
import { ImpactDoorAndWindowsComponent } from './impact-door-and-windows/impact-door-and-windows.component';
import { GeneralConstructionComponent } from './general-construction/general-construction.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
      'pinch': { enable: false },
      'rotate': { enable: false }
  };
}
const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'finance', component: FinanceComponent},
  {path: 'roofing', component: RoofingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    WelcomeComponent,
    FinanceComponent,
    NavbarComponent,
    FooterComponent,
    RoofingComponent,
    ImpactDoorAndWindowsComponent,
    GeneralConstructionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ScrollToModule.forRoot(),
    ToastModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [
    MDBSpinningPreloader,
    CurrentLanguageService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
