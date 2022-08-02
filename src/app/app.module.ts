import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';
import { AppComponent } from './app.component';
import { StoryblokService } from './services/storyblok.service';
import { StoryblokDirective } from './directives/storyblok.directive';
import { TeaserComponent } from './components/teaser/teaser.component';
import { GridComponent } from './components/grid/grid.component';
import { PageComponent } from './components/page/page.component';
import { FeatureComponent } from './components/feature/feature.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    StoryblokDirective,
    TeaserComponent,
    GridComponent,
    FeatureComponent
  ],
  imports: [BrowserModule, DynamicModule],
  exports: [BrowserModule, DynamicModule],
  providers: [StoryblokService],
  bootstrap: [AppComponent],
})
export class AppModule { }