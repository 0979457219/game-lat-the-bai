var js_container = document.getElementById('container')

var images = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6'];
var count_cr = 0
var clone = images
var cards = images.concat(clone)
console.log(cards)


function randommm (arr) {
    for(var i = arr.length; i>0;)
    {
        var j = Math.floor(Math.random() * i);
        i=i-1
        var x = arr [i]
        arr [i] = arr [j]
        arr [j] = x
    }
    return arr;
}
randommm (cards);
console.log(cards);




for (var i = 0; i < cards.length; i++) {
    var card = document.createElement('div');
    card.dataset.item = cards[i];
    card.dataset.view = "card";
    card.classList.add("default")
    var myCards = document.getElementById('container');
    myCards.appendChild(card);

    var x = []
    var resultsArray = []

    card.addEventListener('click', Card_Click);

}

function Card_Click() {
    if (this.className !== 'choose' && this.className !== 'correct') {
        this.className = 'choose';
        const result = this.dataset.item;
        resultsArray.push(result);

        if (resultsArray.length >= 2) {
            if (resultsArray[0] === resultsArray[1]) {
                checkcr("correct", resultsArray[0]);
                count_cr++
            } else {
                checkf("default", resultsArray[0], resultsArray[1]);
            }
            resultsArray.splice(0, 2);

            if(count_cr === images.length) {
                setTimeout( function () {
                    alert("Win")
                }, 1000);
                
            }
                
        }
    }
}


var checkcr = function(newClassName, y) {
    var ys = document.querySelectorAll('[data-item=' + y + ']');
    setTimeout(function() {
        ys[0].className = newClassName;
        ys[1].className = newClassName;
    },500);
     
  }

  var checkf = function(newClassName, y, z) {
    var ys = document.querySelector('[data-item=' + y + '].choose');
    var zs = document.querySelector('[data-item=' + z + '].choose');

    setTimeout(function() {
        ys.className = newClassName;
        zs.className = newClassName;
    },500);
     
  }


  var reload = document.getElementById("js_reload")
  var fun_reload = function () {
    location.reload();
  };
  reload.addEventListener("click", fun_reload)



