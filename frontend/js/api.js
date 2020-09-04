function defaultSuccess(res) {
  console.log('request success: ', res);
}

function defaultError(err) {
  console.log('err happend： ', err);
}

const BASEURL = 'http://www.ustccs.com:5000';

/**
 * 
 * @param {*} options 
 * @returns [{title, url, time}]
 */

function getCategory(options) {
  $.ajax({
    type: 'GET',
    url: BASEURL + '/api/pdf/',
    contentType: 'application/json;charset=utf-8',
    data: {
      dir: options.dir,
    },
    dataType: 'json',
    success: options.success || defaultSuccess,
    error: options.error || defaultError,
  });
}

function getUserList(options) {
  $.ajax({
    type: 'GET',
    url: BASEURL + '/api/excel/',
    contentType: 'application/json;charset=utf-8',
    data: {
      dir: options.dir,
    },
    dataType: 'json',
    success: options.success || defaultSuccess,
    error: options.error || defaultError,    
  })
}