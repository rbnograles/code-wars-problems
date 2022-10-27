const xMarksTheSpot = (input) => {
  const cords = []
  let counter = 0;

  if (input.length > 0) {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] == 'x') {
          cords.push(i);
          cords.push(j);
          counter++;
        }
      }
    }
    if (counter > 1 || counter == 0) return [];

    return cords;
  }

  return [];
}