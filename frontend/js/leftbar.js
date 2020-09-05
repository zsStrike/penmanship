let shdt = $('#shdt + ul');
let qnxs = $('#qnxs + ul');
let yqlj = $('#yqlj + ul');

const IS_EN = window.location.href.includes('_en.html');

getCategory({
  dir: '书画动态',
  success(res) {
    console.log(res);
    let innerHtml = ''
    res.forEach(item => {
      innerHtml += !IS_EN ? `
      <li class="list-group-item">
        <span><a href="./leftbar.html?pdf-url=${item.url}">${item.title}</a></span>
      </li>
      ` : `
      <li class="list-group-item">
        <span><a href="./leftbar_en.html?pdf-url=${item.url}">${item.title}</a></span>
      </li>
      `;
    });
    shdt.html(innerHtml);
  }
});

getCategory({
  dir: '请你欣赏',
  success(res) {
    console.log(res);
    let innerHtml = ''
    res.forEach(item => {
      innerHtml += !IS_EN ? `
      <li class="list-group-item">
        <span><a href="./leftbar.html?pdf-url=${item.url}">${item.title}</a></span>
      </li>
      ` : `
      <li class="list-group-item">
        <span><a href="./leftbar_en.html?pdf-url=${item.url}">${item.title}</a></span>
      </li>
      `;
    });
    qnxs.html(innerHtml);
  }
});

getCategory({
  dir: '友情链接',
  success(res) {
    console.log(res);
    let innerHtml = ''
    res.forEach(item => {
      innerHtml += !IS_EN ? `
      <li class="list-group-item">
        <span><a href="./leftbar.html?pdf-url=${item.url}">${item.title}</a></span>
      </li>
      ` : `
      <li class="list-group-item">
        <span><a href="./leftbar_en.html?pdf-url=${item.url}">${item.title}</a></span>
      </li>
      `;
    });
    yqlj.html(innerHtml);
  }
});