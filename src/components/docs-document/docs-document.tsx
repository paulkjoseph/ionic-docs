import { Component, Prop, State, Watch } from '@stencil/core';
import frontMatter from 'front-matter';
import { HeadingStruc, renderMarkdown } from '../../markdown';

@Component({
  tag: 'docs-document',
  styleUrls: [
    'docs-document.scss',
    'table-of-contents.scss'
  ]
})
export class DocsDocument {
  @Prop() path: string;
  @Prop() pageClass: string;
  @Prop() onLoaded: (document) => void;
  @Prop() isLoadingTimeout = 1000;
  @State() isLoading = false;
  @State() body: string;
  @State() title: string;
  @State() hideTOC = false;
  @State() tocHeadings: HeadingStruc[] = [];

  loadingTimer = null;

  componentDidLoad() {
    return this.fetchDocument();
  }

  @Watch('path')
  fetchDocument() {
    this.setLoadingTimer();
    return fetch(`/docs/content/${this.path}.md`)
      .then(this.validateResponse)
      .then(this.parseDocument)
      .then(this.handleNewContent)
      .catch(this.handleFetchError);
  }

  validateResponse = res => {
    if (!res.ok) throw new Error(`Unable to fetch ${this.path}: ${res.statusText}`);
    return res;
  }

  parseDocument = res => {
    return res.text()
      .then(frontMatter)
      .then(this.stripTitle)
      .then(({ attributes, body }) => ({
        ...attributes,
        ...renderMarkdown(body)
      }));
  }

  handleNewContent = content => {
    this.clearLoadingTimer();
    this.body = content.body;
    this.title = content.title;
    this.hideTOC = content.hideTOC;
    this.tocHeadings = this.hideTOC ? [] : content.headings;
    this.onLoaded({
      ...content,
      pageClass: this.pageClass
    });
  }

  handleFetchError = err => {
    this.clearLoadingTimer();
    this.title = '';
    this.hideTOC = true;
    this.body = err.message;
  }

  setLoadingTimer() {
    this.loadingTimer = setTimeout(() => {
      this.isLoading = true;
    }, this.isLoadingTimeout);
  }

  clearLoadingTimer() {
    clearTimeout(this.loadingTimer);
    this.isLoading = false;
  }

  stripTitle = ({ attributes, body }) => {
    const match = /^# (.*?)$/gm.exec(body);
    if (match) {
      const [ titleLine, title ] = match;
      body = body.replace(titleLine, '');
      attributes.title = attributes.title || title;
    }
    return { attributes, body };
  }

  render() {
    if (this.isLoading) {
      return <loading-indicator/>;
    }

    return [
      <h1>{this.title}</h1>,
      <div class="table-of-contents">
        {(this.tocHeadings.length > 0) && !this.hideTOC ? [
        <strong class="toc-label">Contents</strong>,
        <ul class="toc-list">
          {this.tocHeadings.filter(heading => heading.level < 3).map(heading => {
            return (
              <li class="toc-item">
                <a href={`#${heading.anchorId}`}>
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
        ] : null }
      </div>,
      <main innerHTML={this.body}/>
    ];
  }
}
