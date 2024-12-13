function capitalizeWords(inputString) {
    return inputString
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
              
console.log(capitalizeWords("All the heads of states were escorted to the hall"));