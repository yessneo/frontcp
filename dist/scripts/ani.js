// const buttons = document.getElementsByClassName('buttons');
const overlay = document.querySelectorAll(".overlay");

document.querySelectorAll('.buttons').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      console.log(item.parentElement.children[0]);
      item.parentElement.children[0].style.display = "block";
    })
  })

  document.querySelectorAll('.close-btn').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      console.log(item.parentElement.style.display = "none");
    })
  });

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }