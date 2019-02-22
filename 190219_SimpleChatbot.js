  

  // Basic Chatbot using Conditionals and Objects



  const chatbot ={

  name: 'My name is C3P0',
  home: 'I live in the clouds you upload your files to',
  age: 'I am 304856859433940 seconds old',
  food: 'I eat your data',
  appearance: 'People say I\'m beautiful - as beautiful as a system could be...'

};
  


  function answerQuestion(question, chatbot){




  if (question.toLowerCase().includes('name') || question.toLowerCase().includes('called') || question.toLowerCase().includes('who')){
    console.log(chatbot.name);
  } else if (question.toLowerCase().includes('home') || question.toLowerCase().includes('from') || question.toLowerCase().includes('where')){
    console.log(chatbot.home);
  } else if (question.toLowerCase().includes('age') || question.toLowerCase().includes('old') || question.toLowerCase().includes('how')){
    console.log(chatbot.age);
  } else if (question.toLowerCase().includes('food') || question.toLowerCase().includes('you eat') || question.toLowerCase().includes('eat') || question.toLowerCase().includes('what')){
    console.log(chatbot.food);
  } else if (question.toLowerCase().includes('look') || question.toLowerCase().includes('looking') || question.toLowerCase().includes('appearance')){
    console.log(chatbot.appearance);
  }
  else {
    console.log("It seems as I don't understand what you are trying to tell me :/");
  }
}

// alternatively by Switch


switch (chatbot) {
  case (question.toLowerCase().includes('name') || question.toLowerCase().includes('called') || question.toLowerCase().includes('who')):
    console.log(chatbot.name);
    break;
  case (question.toLowerCase().includes('home') || question.toLowerCase().includes('from') || question.toLowerCase().includes('where')): 
    console.log(chatbot.home);
    break;
  case (question.toLowerCase().includes('age') || question.toLowerCase().includes('old') || question.toLowerCase().includes('how')):
    console.log(chatbot.age);
    break;
  case (question.toLowerCase().includes('food') || question.toLowerCase().includes('you eat') || question.toLowerCase().includes('eat') || question.toLowerCase().includes('what')):
    console.log(chatbot.food);
    break;
  case (question.toLowerCase().includes('age') || question.toLowerCase().includes('old') || question.toLowerCase().includes('been around')):
    console.log(chatbot.appearance);
    break;
  default:
    console.log("It seems as I don't understand what you are trying to tell me :/");
    break;

}

