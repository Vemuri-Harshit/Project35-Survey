class Form {

    constructor() {

        this.title = createElement('h1', "Survey");
        this.input = createInput("Name");
        this.id = createInput("Email Id");
        this.greeting = createElement('h3');
        this.save = createButton('Save');
       
        this.topic = createElement('h3');

    }

    display() {

        this.title.position(200, 0);

        this.input.position(200, 200)
        this.id.position(200, 225);


        this.save.position(373, 244);
        this.save.mousePressed(() => {

            this.input.hide();
            this.title.hide();
            this.save.hide();
            this.id.hide();

        var submit = createButton('Submit');


            player.name = this.input.value();
            player.email = this.id.value();

            count += 1;
            player.index = count;

            player.updateCount(count);
            player.update();

            this.greeting.html("Hello  " + player.name);
            this.greeting.position(200, 0);

            this.topic.html("Let us take the Survey");
            this.topic.position(20, 30);

            var Q1 = createElement('h4', "1.Would You like to hava an interaction program with poor kids in schools ?");
            Q1.position(40, 50);

            var radio1 = createRadio();
            radio1.position(45, 90);

            var A1 = radio1.option("Yes");
            var A2 = radio1.option("No");

            var Q2 = createElement('h4', "2.Are You willing to pay for it ?");
            Q2.position(40, 100);

            var radio2 = createRadio();
            radio2.position(45, 150);

            var A12 = radio2.option("Yes");
            var A22 = radio2.option("No");

            var Q3 = createElement('h4', "3.If Yes, How much ?");
            Q3.position(40, 160);

            var radio3 = createRadio();
            radio3.position(45, 210);

            var A13 = radio3.option("500-1000");
            var A23 = radio3.option("1000-2000");
            var A33 = radio3.option("2000-5000");
            var A43 = radio3.option("5000 or above");

            var Q4 = createElement('h4', "4.Do you think that schools need to have larger playgrounds ?");
                Q4.position(40, 220);

            var radio4 = createRadio();
            radio4.position(45, 260);

            var A14 = radio4.option("Yes");
            var A24 = radio4.option("No");

            var Q5 = createElement('h4', "5.Do you think that in schools children should be allowed to at wherever they want to eat ?");
                Q5.position(40, 280);

            var radio5 = createRadio();
            radio5.position(45, 320);

            var A15 = radio5.option("Yes");
            var A25 = radio5.option("No");


        })

    }

}

