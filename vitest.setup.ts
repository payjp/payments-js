import { vi } from 'vitest';

class MockHTMLScriptElement {
  src = '';
  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;

  setAttribute(name: string, value: string) {
    if (name === 'src') {
      this.src = value;
    }
  }

  getAttribute(name: string) {
    if (name === 'src') {
      return this.src;
    }
    return null;
  }

  dispatchEvent(event: Event) {
    if (event.type === 'load' && this.onload) {
      this.onload();
    } else if (event.type === 'error' && this.onerror) {
      this.onerror();
    }
    return true;
  }

  get nodeName() {
    return 'SCRIPT';
  }
}

class MockElement {
  children: any[] = [];

  appendChild(child: any) {
    this.children.push(child);
    return child;
  }

  querySelectorAll(selector: string) {
    if (selector === 'script') {
      return this.children.filter((c) => c.nodeName === 'SCRIPT');
    }
    return [];
  }

  querySelector(selector: string) {
    const results = this.querySelectorAll(selector);
    return results[0] || null;
  }

  get innerHTML() {
    return '';
  }

  set innerHTML(value: string) {
    this.children = [];
  }
}

const mockHead = new MockElement();
const mockBody = new MockElement();

class MockEvent {
  constructor(public type: string) {}
}

// globalオブジェクトにDOM APIを追加
(global as any).Event = MockEvent;
(global as any).document = {
  createElement(tagName: string) {
    if (tagName === 'script') {
      return new MockHTMLScriptElement();
    }
    return new MockElement();
  },
  get head() {
    return mockHead;
  },
  get body() {
    return mockBody;
  },
  querySelectorAll(selector: string) {
    const headResults = mockHead.querySelectorAll(selector);
    const bodyResults = mockBody.querySelectorAll(selector);
    return [...headResults, ...bodyResults];
  },
  querySelector(selector: string) {
    return mockHead.querySelector(selector) || mockBody.querySelector(selector);
  },
};

(global as any).window = {
  PayjpPayments: undefined,
};
