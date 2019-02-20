
  const chatbot ={

  name: 'My name is C3P0',
  home: 'I live in the clouds you upload your files to',
  age: 'I am 304856859433940 seconds old',
  food: 'I eat your data',
  look: 'People say I\'m beautiful'

};


  if (question.toLowerCase().includes('name') || question.toLowerCase().includes('called') || question.toLowerCase().includes('who')){
    console.log(bot.name);
  } else if (question.toLowerCase().includes('home') || question.toLowerCase().includes('from')){
    console.log(bot.home);
  } else if (question.toLowerCase().includes('made') || question.toLowerCase().includes('built of')){
    console.log(bot.madeOf);
  } else if (question.toLowerCase().includes('food') || question.toLowerCase().includes('you eat') || question.toLowerCase().includes('eat')){
    console.log(bot.food);
  } else if (question.toLowerCase().includes('age') || question.toLowerCase().includes('old') || question.toLowerCase().includes('been around')){
    console.log(bot.age);
  }
  else {
    console.log("It seem as I don't understand what you are trying to tell me");
  }

