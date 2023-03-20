import { Component, OnInit } from '@angular/core';
import { StoryblokService } from './services/storyblok.service';
import { Components } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  story = {content: null, name: ''};
  components = Components;

  constructor(private storyblokService: StoryblokService) {
    window.storyblok.init();
    window.storyblok.on(['change', 'published'],  function() {
      location.reload()
    });
    window.storyblok.on('input', (event) => {
      if(this.story && event.story.content._uid === this.story.content._uid){
        this.story = event.story
      }
    })
  }

  ngOnInit() {
    this.storyblokService.getStory('home', {version: 'draft'})
      .then(data => this.story = data.story);
  }
}
