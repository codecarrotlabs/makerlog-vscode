const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const postLog = (webhook, content, status) => {
  var oReq = new XMLHttpRequest();
  var json = {
    content: content,
    done: status
  }
  oReq.addEventListener('load', reqListener);
  oReq.open('POST', webhook, true);
  oReq.setRequestHeader('Content-Type', 'application/json');
  oReq.send(JSON.stringify(json));
}

function reqListener() {
  console.log(this.responseText);
}

module.exports = postLog