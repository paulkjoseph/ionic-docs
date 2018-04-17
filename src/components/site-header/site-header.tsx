import { Component, Prop } from '@stencil/core';
import { SECTION_FRAMEWORK, SECTION_CLI } from '../../constants';

const CloseIcon = () => (
  <svg viewBox="0 0 54 54">
    <rect transform="rotate(45 27 27)" y="22" width="54" height="10" rx="2"/>
    <rect transform="rotate(-45 27 27)" y="22" width="54" height="10" rx="2"/>
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 54 54">
    <rect y="0" width="54" height="10" rx="2"/>
    <rect y="22" width="54" height="10" rx="2"/>
    <rect y="44" width="54" height="10" rx="2"/>
  </svg>
);

const DocsLogo = () => (
  <svg viewBox="0 0 433 144">
    <title>Ionic Docs</title>
    <path d="M214.3 111h-28.05V32.9h28.05c12.98 0 23.082 3.593 30.305 10.78 7.223 7.187 10.835 16.61 10.835 28.27s-3.612 21.083-10.835 28.27C237.382 107.407 227.28 111 214.3 111zm18.04-21.12c4.107-4.327 6.16-10.303 6.16-17.93 0-7.627-2.035-13.585-6.105-17.875-4.07-4.29-10.248-6.435-18.535-6.435h-11.55v48.62h11.55c8.287 0 14.447-2.127 18.48-6.38zm80.266 13.75c-5.574 5.793-12.87 8.69-21.89 8.69-9.02 0-16.317-2.915-21.89-8.745-5.574-5.83-8.36-12.962-8.36-21.395s2.786-15.565 8.36-21.395c5.573-5.83 12.87-8.745 21.89-8.745 9.02 0 16.316 2.915 21.89 8.745 5.573 5.83 8.36 12.962 8.36 21.395s-2.787 15.583-8.36 21.45zm-32.45-33.44c-2.714 2.933-4.07 6.93-4.07 11.99 0 5.06 1.375 9.057 4.125 11.99s6.251 4.4 10.505 4.4c4.253 0 7.755-1.467 10.505-4.4 2.75-2.933 4.125-6.93 4.125-11.99 0-5.06-1.375-9.057-4.125-11.99s-6.252-4.4-10.505-4.4c-4.254 0-7.774 1.467-10.56 4.4zm52.875 33.55c-5.426-5.793-8.14-12.98-8.14-21.56 0-8.58 2.732-15.748 8.195-21.505 5.464-5.757 12.375-8.635 20.735-8.635 8.214 0 14.685 2.31 19.415 6.93 4.73 4.62 7.425 9.79 8.085 15.51h-16.06c-.586-2.493-1.943-4.547-4.07-6.16-2.126-1.613-4.62-2.42-7.48-2.42-4.106 0-7.333 1.485-9.68 4.455-2.346 2.97-3.52 6.912-3.52 11.825 0 4.913 1.174 8.855 3.52 11.825 2.347 2.97 5.574 4.455 9.68 4.455 2.86 0 5.354-.807 7.48-2.42 2.127-1.613 3.484-3.667 4.07-6.16h16.06c-.66 5.72-3.355 10.89-8.085 15.51-4.73 4.62-11.201 6.93-19.415 6.93-8.36 0-15.29-2.86-20.79-8.58zm75.426 8.58c-15.693 0-24.017-6.673-24.97-20.02h15.84c.147 2.127 1.008 3.905 2.585 5.335 1.577 1.43 3.905 2.145 6.985 2.145 2.933 0 5.17-.477 6.71-1.43s2.31-2.237 2.31-3.85c0-1.76-1.1-3.062-3.3-3.905-2.2-.843-4.858-1.522-7.975-2.035a88.465 88.465 0 0 1-9.405-2.09c-3.153-.88-5.83-2.603-8.03-5.17-2.2-2.567-3.3-5.977-3.3-10.23 0-5.353 2.127-9.863 6.38-13.53s9.827-5.5 16.72-5.5c7.847 0 13.677 1.98 17.49 5.94 3.813 3.96 5.867 8.47 6.16 13.53h-15.07c-.147-1.98-.972-3.63-2.475-4.95-1.503-1.32-3.575-1.98-6.215-1.98-2.493 0-4.437.532-5.83 1.595-1.393 1.063-2.09 2.402-2.09 4.015 0 1.76 1.1 3.043 3.3 3.85 2.2.807 4.858 1.448 7.975 1.925a77.514 77.514 0 0 1 9.35 2.035c3.117.88 5.775 2.64 7.975 5.28 2.2 2.64 3.3 6.16 3.3 10.56 0 5.353-2.182 9.772-6.545 13.255-4.363 3.483-10.321 5.225-17.875 5.225zM72 39c18.183 0 33 14.817 33 33s-14.79 33-33 33-33-14.817-33-33c0-18.21 14.817-33 33-33zm46.5 2c-8.008 0-14.5-6.492-14.5-14.5S110.492 12 118.5 12 133 18.492 133 26.5 126.508 41 118.5 41zm19.031 1.16C141.834 51.58 144 61.621 144 72c0 39.713-32.287 72-72 72-39.712 0-72-32.287-72-72C0 32.288 32.288 0 72 0c11.616 0 22.725 2.7 32.99 7.987l1.35.704-1.18.956c-2.897 2.334-5.204 5.344-6.638 8.719l-.394.928-.928-.45c-7.903-3.769-16.397-5.682-25.2-5.682-32.428 0-58.837 26.41-58.837 58.838s26.353 58.81 58.809 58.81c32.456 0 58.837-26.41 58.837-58.838a58.49 58.49 0 0 0-4.5-22.556l-.393-.928.956-.366a22.562 22.562 0 0 0 9.028-6.216l1.012-1.125.62 1.378z" fill-rule="evenodd"/>
  </svg>
);

const frameworkDropdownItems = [
  {
    title: 'Framework',
    subtitle: 'The UI Toolkit for building highly performant apps',
    url: '/docs',
    category: 'framework',
    className: 'framework'
  },
  {
    title: 'Pro',
    subtitle: 'Integrated suite of tools & services for shipping apps',
    url: '/docs/pro',
    category: 'pro',
    className: 'pro'
  },
  {
    title: 'CLI',
    subtitle: 'Ionic command line interface tool',
    url: '/docs/cli',
    category: 'cli',
    className: 'cli',
    small: true
  },
  {
    title: 'Capacitor',
    subtitle: 'Cross-platform Native SDK Container',
    url: 'https://capacitor.ionicframework.com/',
    className: 'capacitor',
    small: true
  },
  {
    title: 'Stencil',
    subtitle: 'Reusable web component compiler',
    url: 'https://stenciljs.com/',
    className: 'stencil',
    small: true
  }
];

const ecosystemDropdownItems = [
  {
    text: 'Forum',
    url: 'https://forum.ionicframework.com/',
    className: 'forum'
  },
  {
    text: 'Chat',
    url: 'https://ionicworldwide.herokuapp.com/',
    className: 'chat'
  },
  {
    text: 'Blog',
    url: 'https://blog.ionicframework.com/',
    className: 'blog'
  },
  {
    text: 'Twitter',
    url: 'https://twitter.com/Ionicframework',
    className: 'twitter'
  },
  {
    text: 'Stack',
    url: 'https://stackoverflow.com/questions/tagged/ionic-framework',
    className: 'stack-overflow'
  },
  {
    text: 'Swag',
    url: 'https://shop.ionicframework.com/',
    className: 'swag'
  }
];

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.scss'
})
export class SiteHeader {
  @Prop() currentSection: string;
  @Prop() onToggleClick: () => void;
  @Prop() isMenuOpen: boolean;
  
  renderFrameworkDropdown = dropdown => {
    return [
      <a class="current" onClick={dropdown.toggle}>{dropdown.selected.title}</a>,
      <ul class={{ 'active': dropdown.isOpen }}>
        {dropdown.items.map(item =>
          <li class={{
            [item.className]: true,
            'active': dropdown.selected === item,
            'sm': item.small
          }}>
            <a href={item.url}>
              <strong>{item.title}</strong>
              <span>{item.subtitle}</span>
              { item.category ? null : <new-tab-icon /> }
            </a>
          </li>
        )}
      </ul>
    ];
  }

  renderEcosystemDropdown = dropdown => {
    return [
      <a class="current" onClick={dropdown.toggle}>Ecosystem</a>,
      <ul class={{ 'active': dropdown.isOpen }}>
        {dropdown.items.map(item => (
          <li class={item.className}>
            <a href={item.url} target="_blank">{item.text}</a>
          </li>
        ))}
      </ul>
    ];
  }

  renderGithubLink() {
    switch (this.currentSection) {
      case SECTION_FRAMEWORK:
        return (
          <a href="https//github.com/ionic-team/ionic" class="github" target="_blank">
            GitHub<new-tab-icon class="on-blue"/>
          </a>
        );
      case SECTION_CLI:
        return (
          <a href="https://github.com/ionic-team/ionic-cli" class="github" target="_blank">
            GitHub<new-tab-icon/>
          </a>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <nav>
        <button
          onClick={this.onToggleClick}
          class={{ 'site-nav-toggle': true, 'is-open': this.isMenuOpen }}>
            { this.isMenuOpen ? <CloseIcon/> : <MenuIcon/> }
        </button>
        <a href="/docs" id="site-logo"><DocsLogo/></a>
        <ctrl-dropdown
          class="framework-dropdown"
          autoClose
          items={frameworkDropdownItems}
          renderer={this.renderFrameworkDropdown}/>
        <site-search/>
        <ctrl-dropdown
          class="ecosystem-dropdown"
          autoClose
          items={ecosystemDropdownItems}
          renderer={this.renderEcosystemDropdown}/>
        { this.renderGithubLink() }
      </nav>
    );
  }
}
