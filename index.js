function getIssues() {
  const repo = 'gilsunshine/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`).then(res => {
    showIssues(res)
  })
}

function showIssues(json) {
  const issues = document.getElementById('issues')
  issues += `
    <div>
      <h2>${json.title}</h2>
      <p>${json.body}</p>
    </div>
  `
}

function createIssue() {
  const repo = 'gilsunshine/javascript-fetch-lab'
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const postData = {title: title, body: body}

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => {
    showIssues(res)
  })

}

function showResults(json) {
  console.log(json.url)
  const results = document.getElementById('results')
  results += `
    <li>
      <a href='${json.url}'>Repo</a>
    </li>
  `
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => {
    showResults(res)
  })
}

function getToken() {
  return ''
}
