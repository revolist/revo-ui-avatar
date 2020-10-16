import { Component, Prop, h, VNode, Host } from '@stencil/core';
import { Color } from '../../utils/utils';


/**
 * Simple and light component for custom user avatar
 */
@Component({
  tag: 'revo-ui-avatar',
  styleUrl: 'revo-ui-avatar.style.scss'
})
export class RevoUiAvatar {
  /**
   * The title that will be used to compute user initial.
   */
  @Prop() name: string = '?';

  /**
   * Force the displayed initials by overriding the computed ones.
   */
  @Prop() initials: string;

  /**
   * Path to the avatar image to display.
   */
  @Prop() src: string;

  /**
   * The background color to use. If none and @randomColor = true, generate automatically.
   */
  @Prop() backgroundColor: string;
  /**
   * The background color opacity.
   */
  @Prop() backgroundColorOpacity: number;
  /**
   * The font color to use if no image is provided.
   */
  @Prop() color: string = 'white';

  /**
   * Uses inline-flex instead of flex
   */
  @Prop() inline: boolean = false;

  /**
   * Rectangle size
   */
  @Prop() size: number = 40;

  /**
   * Is circle
   */
  @Prop() circle: boolean = true;

  /**
   * Generate random color
   */
  @Prop() randomColor: boolean = true;

  /**
   * Is main background is light
   */
  @Prop() isLight: boolean = true;

  /** is image mode */
  get isImage(): boolean {
    return !!this.src;
  }

  /** generate styles */

  private style() {
    const style = {
      display: this.inline ? 'inline-flex' : 'flex',
      width: `${this.size}px`,
      height: `${this.size}px`,
      borderRadius: this.circle ? '50%' : '0',
      lineHeight: `${(this.size + Math.floor(this.size / 20))}px`,
    }
    const initialBackgroundAndFontStyle = {
      backgroundColor: this.backgroundColor || (new Color(undefined, undefined, undefined, this.backgroundColorOpacity, this.isLight)).hsl,
      fontSize: `${Math.floor(this.size / 2.5)}px/${this.size}px`,
      color: this.color
    }
    return {...style, ...initialBackgroundAndFontStyle}
  }

  private initial(title: string) {
    let parts = title.split(/[ -]/)
    let initials = ''
    for (var i = 0; i < parts.length; i++) {
      initials += parts[i].charAt(0)
    }
    if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
      initials = initials.replace(/[a-z]+/g, '')
    }
    initials = initials.substr(0, 3).toUpperCase();
    return initials
  }

  render() {
    const els: (VNode|string)[] = [];
    if (this.isImage) {
      els.push(<img src={this.src}/>);
    } else {
      const initials = this.initials || this.initial(this.name)
      els.push(initials);
    }
    return <Host style={this.style()}>{els}</Host>;
  }
}
