const useColor = () => {
  const randomInteger = () => Math.floor(Math.random() * 180);

  const generateColor = () => {
    const red = randomInteger();
    const green = randomInteger();
    const blue = randomInteger();
    const bodyBackgroundColor = `rgba(${red}, ${green}, ${blue}, 0.28)`;

    document.body.style.backgroundColor = bodyBackgroundColor;
    return {
      backgroundColor: bodyBackgroundColor,
    };
  };

  return {
    generateColor,
  };
};

export default useColor;
