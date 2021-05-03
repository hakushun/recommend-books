export const scrollToTarget = (id?: string): void => {
  let element: HTMLElement | null;
  let target: number;

  if (id) {
    element = document.getElementById(id);
    if (!element) return;
    target = element.getBoundingClientRect().top + window.pageYOffset;
    element.focus();
  } else {
    // idがなければページ一番下までスクロール
    element = document.documentElement;
    target = element.scrollHeight - element.clientHeight;
    // elementにfocusメソッドがないのでHTMLElementに型アサーションしてるけど、力技すぎ？
    (document
      .getElementById('comment_list')
      ?.querySelector('li:last-child') as HTMLElement).focus();
  }
  window.scrollTo({
    top: target,
    left: 0,
    behavior: 'smooth',
  });
};
