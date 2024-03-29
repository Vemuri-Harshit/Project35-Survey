class Form {
  constructor() {
    this.title = createElement('h1', 'Survey');
    this.input = createInput('Name');
    this.id = createInput('Email Id');
    this.greeting = createElement('h3');
    this.save = createButton('Save');

    this.topic = createElement('h3');

    this.submit = createButton('Submit');
    this.submit.hide();

    this.Q1 = createElement('h4','1.Would You like to hava an interaction program with poor kids in schools ?');
    this.Q1.hide();
      
    this.radio1 = createRadio();
    this.radio1.option('Yes');
    this.radio1.option('No');

    this.radio1.hide();

    this.Q2 = createElement('h4', '2.Are You willing to pay for it ?');
    this.Q2.hide();

    this.radio2 = createRadio();
    this.radio2.option('Yes');
    this.radio2.option('No');
    this.radio2.hide();

    this.Q3 = createElement('h4', '3.If Yes, How much ?');
    this.Q3.hide();

    this.radio3 = createRadio();
    this.radio3.option('500-1000');
    this.radio3.option('1000-2000');
    this.radio3.option('2000-5000');
    this.radio3.option('5000 or above');
    this.radio3.hide();

    this.Q4 = createElement('h4','4.Do you think that schools need to have larger playgrounds ?');
    this.Q4.hide();

    this.radio4 = createRadio();
    this.radio4.option('Yes');
    this.radio4.option('No');
    this.radio4.hide();

    this.Q5 = createElement('h4','5.Do you think that in schools children should be allowed to at wherever they want to eat ?');
    this.Q5.hide();

    this.radio5 = createRadio();
    this.radio5.option('Yes');
    this.radio5.option('No');
    this.radio5.hide();

    this.credit = createElement('h1', 'Thank You !');
    this.credit.hide();
  }

  display() {
    this.title.position(width / 2 - 50, 0);

    this.input.position(width / 2 - 70, 200);
    this.id.position(width / 2 - 70, 225);
    this.submit.position(width / 2 + 30, height - 50);

    this.save.position(width / 2 - 30, height / 2 + height / 4);

    this.Q1.position(40, 50);
    this.radio1.position(45, 90);

    this.Q2.position(40, 100);
    this.radio2.position(45, 150);
      
    this.Q3.position(40, 160);
    this.radio3.position(45, 210);
      
    this.Q4.position(40, 220);
    this.radio4.position(45, 260);
    
    this.Q5.position(40, 280);
    this.radio5.position(45, 320);

    this.credit.position(10,10);

    this.save.mousePressed(() => {
      this.input.hide();
      this.title.hide();
      this.save.hide();
      this.id.hide();
      this.submit.show();

      player.name = this.input.value();
      player.email = this.id.value();

      count += 1;
      player.index = count;

      player.updateCount(count);


      this.greeting.html('Hello  ' + player.name);
      this.greeting.position(200, 0);

      this.topic.html('Let us take the Survey');
      this.topic.position(20, 30);
        
        this.Q1.show();
        this.radio1.show();

        this.Q2.show();
        this.radio2.show();


        this.Q3.show();
        this.radio3.show();

        this.Q4.show();
        this.radio4.show();

        this.Q5.show();
        this.radio5.show();
        
      this.submit.mousePressed(() => {
        player.a1 = this.radio1.value();
        player.a2 = this.radio2.value();
        player.a3 = this.radio3.value();
        player.a4 = this.radio4.value();
        player.a5 = this.radio5.value();
        
        player.update();

        this.topic.hide();
        this.greeting.hide();

        this.Q1.hide();
        this.radio1.hide();
    
        this.Q2.hide();
        this.radio2.hide();

        this.Q3.hide();
        this.radio3.hide();

        this.Q4.hide();
        this.radio4.hide();

        this.Q5.hide();
        this.radio5.hide();

        this.submit.hide();

        this.credit.show();
      })
      
    });

  }
}
