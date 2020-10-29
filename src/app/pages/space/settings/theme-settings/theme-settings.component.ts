import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { ThemeItem } from '@customTypes/theme';

@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss']
})
export class ThemeSettingsComponent implements OnInit {

  public themes: ThemeItem[];
  public cTheme: string;
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themes = this.themeService.getThemes();
    this.themeService.currentTheme$.subscribe(item => {
      if (item) {
        this.cTheme = item.id;
      }
    })
  }

  handleSelectChange(){
    this.themeService.setCurrentTheme(this.cTheme);
  }
}
