
var player1 = prompt("Enter Heads Name")
var player2 = prompt("Enter Tails Name")

var toss = Math.random() * 2
var ch = Math.floor(toss)

if(ch == 0){
    document.write(player1+ " heads wins")
}
else {
    document.write(player2+ " tails wins")
}