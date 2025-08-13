# 📝 Remove Vowels from a String (Except "y")

## 📖 What It Does
This utility takes a string as input and removes all vowels **(`a`, `e`, `i`, `o`, `u`)** from it.  
The letter **`y`** is **not** considered a vowel in this implementation.

---

## ⚙️ How It Works
1. Convert the string into an array of individual characters.
2. Filter out characters that are vowels.
3. Join the remaining characters back into a string.
4. Return the resulting string.

---
## 💡 How Many Solutions I Found

| 🟢 **1** |



## 💻 Example

```javascript
function removeVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str
    .split('')
    .filter(char => !vowels.includes(char.toLowerCase()))
    .join('');
}

console.log(removeVowels("beautiful day")); 
// Output: "btfl dy"

## 💻 Usages

# Clone the repository
git clone https://github.com/EngrZihad/remove-vowels.git

# Navigate into the folder
cd remove-vowels

# Run the script (Node.js example)
node index.js

## 📌 Notes
- Supports both uppercase and lowercase letters.
- The letter `y` is **not** considered a vowel in this implementation.
- Returns a **new** string without modifying the original.
- Works in any JavaScript environment (Node.js, browser, etc.).
- No external libraries or dependencies required.


## ✍️ Author
**Md. Zihad Mia**  
💻 Full-Stack Web Developer  
🌐 [GitHub](https://github.com/EngrZihad)  
📧 webEngr.zihad@gmail.com
