console.log("-- DOM Events");

// "onclick" di element HTML
const p3 = document.querySelector('.p3');
  function ubahWarna() {
    p3.style.backgroundColor = 'lightblue';
  }


// "onclick" di JavaScript
const p2 = document.querySelector('.p2');
  p2.onclick = function() {
    p2.style.backgroundColor = 'lightblue';
  };

// method "addEventListener"
const ul = document.querySelector('ul');
const p4 = document.querySelector('.p4');

  p4.addEventListener('click', function() {
    p4.style.backgroundColor = 'lightblue';

    const liBaru = document.createElement('li');
    const liBaruTeks = document.createTextNode('Item Baru');
      liBaru.appendChild(liBaruTeks);
      ul.appendChild(liBaru);
  });

const p1 = document.querySelector('.p1');
  p1.addEventListener('dblclick', function() {
    p1.style.backgroundColor = 'lightblue';
  });


const form = document.querySelector('form');
const input = document.querySelector('input');
  form.addEventListener('submit', function() {
    document.body.style.backgroundColor = 'lightblue';
  });

  input.addEventListener('mouseenter', function() {
    input.style.transition = '0.15s';
    input.style.backgroundColor = '#eee';
  });

  input.addEventListener('mouseleave', function() {
    input.style.backgroundColor = 'white';
  });



// PERBEDAAN
/*
const p2 = document.querySelector('.p2');
  p2.onclick = function() {
    p2.style.backgroundColor = 'lightblue';
  }

  p2.onclick = function() {
    p2.style.color = 'red';   // menimpa
  }

const p3 = document.querySelector('.p3');
  p3.addEventListener('click', function() {
    p3.style.backgroundColor = 'lightblue';
  });

  p3.addEventListener('click', function() {
    p3.style.color = 'red';
  });
*/
