const wordfrequency=(phrase)=>{
  let frequency={}
  words=phrase.split(' ')
  for(const word of words)
    {
      if(word in frequency)
      {
        frequency[word]++
      }
      else {
        frequency[word]=1
      }
    }
  return frequency
}
let words="lol what lol"
console.log(wordfrequency(words))
