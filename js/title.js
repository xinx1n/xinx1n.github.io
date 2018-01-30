document.addEventListener('DOMContentLoaded', function() {
  var pageTitle = document.title
  var timer
  window.addEventListener('focus', function() {
    document.title = 'welcome'
    timer = setTimeout(function() {
      document.title = pageTitle
    }, 800)
  })
  window.addEventListener('blur', function() {
    clearTimeout(timer)
    document.title = 'where r u | ' + pageTitle
  })
})
