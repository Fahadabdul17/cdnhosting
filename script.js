const changeText= () => {
  const welcomeTextElement = 
  document.getElementById('welcome-text');
}

const changeTextButton = () => {
  document.getElementById('change-text-button');
  changeTextButton.addEvenListener("click", changeText);
}