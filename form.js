class Form{

constructor(){
}

display(){
    var title = createElement("h2");
    title.html("Car Racing Game");
    title.position(300,100)

    var input = createInput("name");
    input.position(300,300)

    var button = createButton("play");
    button.position(300,400)
    button.mousePressed(function(){

    input.hide();
    button.hide();

    var name = input.value();
    playerCount += 1;
    player.update(name);
    player.updateCount(playerCount);


    var greeting = createGreeting("h3");
    greeting.html("Hello " + name);
    greeting.position(300,300)
    })

    
}
}