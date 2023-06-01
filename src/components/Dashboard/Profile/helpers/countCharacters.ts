const countCharacters = (e: any) => {
  const remainingChars = 300 - e.target.value.length;
  let counterElement = document.getElementById("charCounter");

  // @ts-ignore
  counterElement.innerText = `${remainingChars}`;
};

export default countCharacters;
