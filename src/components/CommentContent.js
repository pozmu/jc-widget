import { h, render, Component } from 'preact';
import { c } from '../utils/style';

export class CommentContent extends Component {
  constructor({ theme }) {
    super();
    this.contentStyle = c(`{
      position: relative;
      font-size: 15px;
      line-height: 1.6;
      overflow: hidden;
      box-sizing: inherit;
      margin: 0.5em 0px;
      color: ${theme.primaryTextColor};
    }
    > div > *:first-child {
      margin-top: 0;
    }
    > div > *:last-child {
      margin-bottom: 0;
    }
    ul {
      box-sizing: inherit;
      margin: 0;
    }
    ol {
      box-sizing: inherit;
      margin: 0;
    }
    blockquote {
      box-sizing: inherit;
      margin: 0;
      padding-left: 5px;
      margin-left: 5px;
      border-left: 5px solid ${theme.primaryColor};
    }
    a {
      box-sizing: inherit;
      color: ${theme.primaryTextColor};
      font-size: 15px;
      border-bottom: 1px dotted ${theme.primaryTextColor};
      cursor: pointer;
      text-decoration: none;
    }
    a:hover {
      color: ${theme.primaryTextColorAlt};
      background-color: transparent;
    }
    p {
      margin: 0.5em 0px;
      box-sizing: inherit;
    }
    pre {
      font-size: 15px;
      line-height: 1.6;
      margin: 0.5em 0px;
      box-sizing: inherit;
    }
    pre code {
      font-size: 13px;
      font-family: monospace;
      line-height: 1.6;
      box-sizing: inherit;
    }`);
  }
  render({ content }) {
    return <div className={this.contentStyle}>{content}</div>;
  }
}