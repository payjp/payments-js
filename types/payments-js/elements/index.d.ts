export type PayjpElement = {
  /**
   * Element を DOM にマウントします。
   * @param selector - マウント先のCSSセレクタまたはHTMLElement
   */
  mount(selector: string | HTMLElement): void;

  /**
   * Element を DOM からアンマウントします。
   */
  unmount(): void;
}
