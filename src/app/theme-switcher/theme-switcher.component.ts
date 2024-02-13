import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
})
export class ThemeSwitcherComponent {
  private _scheme: string = "auto";
  private menuTarget: string = "details.dropdown";
  private buttonsTarget: string = "a[data-theme-switcher]";
  private buttonAttribute: string = "data-theme-switcher";
  private rootAttribute: string = "data-theme";
  private localStorageKey: string = "picoPreferredColorScheme";

  ngOnInit() {
    this.scheme = this.schemeFromLocalStorage;
    this.initSwitchers();
  }

  // Get color scheme from local storage
  get schemeFromLocalStorage(): string {
    if (typeof window.localStorage !== "undefined") {
      if (window.localStorage.getItem(this.localStorageKey) !== null) {
        return window.localStorage.getItem(this.localStorageKey) || this._scheme;
      }
    }
    return this._scheme;
  }

  // Preferred color scheme
  get preferredColorScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  // Init switchers
  initSwitchers() {
    const buttons = document.querySelectorAll(this.buttonsTarget);
    buttons.forEach((button) => {
      button.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          // Set scheme
          this.scheme = button.getAttribute(this.buttonAttribute) || this._scheme;
          // Close dropdown
          document.querySelector(this.menuTarget)?.removeAttribute("open");
        },
        false
      );
    });
  }

  // Set scheme
  set scheme(scheme) {
    if (scheme == "auto") {
      this.preferredColorScheme == "dark" ? (this._scheme = "dark") : (this._scheme = "light");
    } else if (scheme == "dark" || scheme == "light") {
      this._scheme = scheme;
    }
    this.applyScheme();
    this.schemeToLocalStorage();
  }

  // Get scheme
  get scheme() {
    return this._scheme;
  }

  // Apply scheme
  applyScheme() {
    document.querySelector("html")?.setAttribute(this.rootAttribute, this.scheme);
  }

  // Store scheme to local storage
  schemeToLocalStorage() {
    if (typeof window.localStorage !== "undefined") {
      window.localStorage.setItem(this.localStorageKey, this.scheme);
    }
  }
}
