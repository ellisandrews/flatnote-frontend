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
