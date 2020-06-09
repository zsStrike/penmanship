let title = document.querySelector('span.title');
let inner = '';
title.childNodes.forEach((el) => {
  inner += el.innerHTML;
  title.removeChild(el);
});
title.innerHTML = inner;