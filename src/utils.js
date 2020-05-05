export const titleCase = string => {

  // Remove any leading or trailing whitespace, then split on internal whitespace
  const words = string.trim().split(/\s+/)  
 
  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
  }

  // Join the words back together into a string
  return words.join(" ")
}


export const tagArrayToString = tagArray => {
  return tagArray.join(', ')
}


export const tagStringToArray = tagString => {
  const rawNames = tagString.split(',')  // Split on comma into array of raw tag names
  const trimmedNames = rawNames.map(rawName => rawName.trim())  // Trim leading and trailing whitespace from each tag name
  return trimmedNames.map(trimmedName => trimmedName.replace(/\s\s+/g, ' '))  // Replace internal whitespace with single space
}
