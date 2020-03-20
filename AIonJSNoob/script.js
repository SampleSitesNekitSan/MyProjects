function getRandomInt (min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomFloat(min, max)
{
    var value = Math.random(Math.random() * (max - min)) + min;
    return value.toFixed(1);
}

function moving(name, speed, age) {
    let geneticIndivid = new genetic();
    let geneticStartPositionCommon = geneticIndivid.position();

    var geneticStartPositionY, geneticStartPositionX;
    var maxAge = geneticIndivid.genAge()

    
    if(age > 0 && age < maxAge[1])
    {
            var i;
            for(i = 0; i < maxAge[1]; i++)
            {
                geneticStartPositionX = Math(geneticStartPositionCommon[0]+speed);
                geneticStartPositionY = Math(geneticStartPositionCommon[1]+speed);
            }
    }    

    name.setAttribute(
        'style',
        `left: ${geneticStartPositionX}px; top: ${geneticStartPositionY}px;`
        );
        console.log(geneticStartPositionX,geneticStartPositionY);
}

class genetic
{
    constructor (age)
    {
        this.age = age;
    }
    genColor ()
    {
        var colors, valueArrColors, randomValueColor;

        colors = new Array("red", "blue", "green", "yellow", "white", "black");
        valueArrColors = colors.length;
        randomValueColor = getRandomInt(0, valueArrColors);

        return colors[randomValueColor];
    }
    genHp ()
    {
        var hp, randomValueHp;

        hp = 100;
        return randomValueHp = getRandomInt(60, hp);
    }
    genSpeed ()
    {
        const genomSpeed = 1;
        var speed;

        speed = getRandomFloat(0.1, genomSpeed);
        return speed;
    }
    genAge()
    {
        var maxAge;

        maxAge = 10;
        return [this.age, maxAge];
    }
    position ()
    {
        var positionX, positionY;
        
        positionX = getRandomInt(0, (1020-24));
        positionY = getRandomInt(0, (720-24))

        return [positionX, positionY];
    }
}

class individ
{
    constructor (name, number)
    {
        this.name = name;
        this.number = number;
    }
    individualСollector ()
    {
        var nameIndivid, colorIndivid, hpIndivid, speedIndivid, ageIndivid, positionIndivid;
        var age = 0;
        let collect = new genetic(age);
        
        colorIndivid = collect.genColor();
        hpIndivid = collect.genHp();
        speedIndivid = collect.genSpeed();
        ageIndivid = collect.genAge();
        positionIndivid = collect.position();

        nameIndivid = this.name

        setTimeout(moving(nameIndivid,speedIndivid,age), 2000);

        this.name.setAttribute(
            'style',
            `background-color: ${colorIndivid};
            left: ${positionIndivid[0]}px; top: ${positionIndivid[1]}px;`
            );
        
        

        console.log(colorIndivid,hpIndivid,speedIndivid,ageIndivid,positionIndivid);
        console.log(this.name, this.number);
    }
}

function run ()
{
    var individs, numb;
    let individCreat;

    numb = 0;

    individs = new Array(document.querySelector("#individ1"), document.querySelector("#individ2"), document.querySelector("#individ3"));
    numb = document.querySelector("#number").value;
    
    
    individCreat = new individ(individs[0], numb);
    
    individCreat.individualСollector();

}