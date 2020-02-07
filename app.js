$(document).ready(() => {

    $('body').append('<div class="button-container"></div>');
    $('.button-container').append('<button class="button generate">Generate Die</button>');
    $('.button-container').append('<button class="button Roll">Roll Dice</button>');
    $('.button-container').append('<button class="button Sum">Sum Dice</button>');
    $('.button-container').after('<div class="container"></div>')
    $('.generate').click(() => {
        let die1 = new Die();
    })
    $('.Sum').click(() => {
        let text_array = [];
        div_array.forEach((element) => {
            let text = $(element).html();
            text_array.push(parseInt(text, 10))
        })
        let sum = text_array.reduce((a, b) => a + b);
        alert(`The sum of the die is ${sum}`);
    })
})

let div_array = [];

class Die {
    constructor() {
        this.div = $('<div></div>');
        $(this.div).addClass("val");
        div_array.push(this.div);

        this.roll();
        $('.Roll').click(() => this.roll());
        $(this.div).click(() => this.roll());
        $(this.div).dblclick(() => {
            this.index  = div_array.indexOf(this.div);
            console.log(div_array.splice(this.index,1));
            $(this.div).remove();
        })

        $('.container').append(this.div);
    }

    roll() {
        this.value = randVal(7, 1);
        $(this.div).text(`${this.value}`)
    }

}


let randVal = (Max, Min) => Math.floor(Math.random() * (Max - Min)) + Min;

// let backImg = Val => {
//     switch (Val) {
//         case 4:
//             $(`.${Val}`).css({
//                 "background-image": 'url("https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_4-512.png")',
//                 "background-size": 'cover',
//             })
//             break;
//         case 5:
//             $(`.${Val}`).css({
//                 "background-image": 'url("https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_5-512.png")',
//                 "background-size": 'cover',
//             })
//             break;
//     }


// }