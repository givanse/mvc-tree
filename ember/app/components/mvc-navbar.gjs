import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';
import { LinkTo } from '@ember/routing';

export default class MvcNavbar extends Component {
  @tracked menuOpen = false;

  toggleMenu = () => {
    this.menuOpen = !this.menuOpen;
  };

  <template>
    <nav
      class="navbar navbar-default"
      itemscope
      itemtype="http://schema.org/SiteNavigationElement"
    >
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle {{if this.menuOpen '' 'collapsed'}}"
            aria-expanded={{if this.menuOpen "true" "false"}}
            {{on "click" this.toggleMenu}}
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <LinkTo @route="index" class="navbar-brand">
            MVC Family Tree
          </LinkTo>
        </div>

        <div
          class="collapse navbar-collapse {{if this.menuOpen 'in'}}"
          id="mvc-navbar-collapse"
        >
          <ul class="nav navbar-nav">
            <li>
              <LinkTo @route="about" class="navbar-brand">
                About
              </LinkTo>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li>
              <a>
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=givanse&repo=mvc-tree&type=star&count=true&size=large"
                  frameborder="0"
                  scrolling="0"
                  width="160px"
                  height="30px"
                  title="GitHub star"
                ></iframe>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
}
