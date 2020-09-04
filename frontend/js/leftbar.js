let shdt = $('#shdt');
let qnxs = $('#qnxs');
let yqlj = $('#yqlj');

getCategory({
  dir: 'shdt',
  success(res) {
    console.log(res);
    let innerHtml = ''
    res.data.forEach(item => {
      innerHtml += `
      <li class="list-group-item" data-url="${item.url}">
        <span>${item.title}</span>
        <span style="float: right;">${new Date(item.time).toLocaleString('zh-CN', {hour12: false})}</span>
      </li>
      `;
    });
    shdt.html(innerHtml);
  }
});

getCategory({
  dir: 'qnxs',
  success(res) {
    console.log(res);
    let innerHtml = ''
    res.data.forEach(item => {
      innerHtml += `
      <li class="list-group-item" data-url="${item.url}">
        <span>${item.title}</span>
        <span style="float: right;">${new Date(item.time).toLocaleString('zh-CN', {hour12: false})}</span>
      </li>
      `;
    });
    qnxs.html(innerHtml);
  }
});

getCategory({
  dir: 'yqlj',
  success(res) {
    console.log(res);
    let innerHtml = ''
    res.data.forEach(item => {
      innerHtml += `
      <li class="list-group-item" data-url="${item.url}">
        <span>${item.title}</span>
        <span style="float: right;">${new Date(item.time).toLocaleString('zh-CN', {hour12: false})}</span>
      </li>
      `;
    });
    yqlj.html(innerHtml);
  }
});