let str1 = "sumus";

var isPalindrome = function (s) {
  const newStr = s.toLowerCase().replace(/[^0-9a-z]/g, "");

  let left = 0;
  let right = newStr.length - 1;

  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("Ceci n’est pas une palindrome"));

const isStrPalindrome = (
  str1 = new Error("Please provide string to check Palindrome")
) => {
  if (str1 instanceof Error) {
    return str1.message;
  }
  let isPalindrome = false,
    palindromArr = [],
    cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0;
  try {
    for (let startIdx = 0; startIdx < str1.length; startIdx++) {
      const startElement = str1[startIdx];
      for (
        let endIdx = str1.length - (1 + startIdx);
        endIdx < str1.length;
        endIdx--
      ) {
        const endElement = str1[endIdx];
        if (startElement == endElement) {
          palindromArr.push(startElement);
          cnt1 += 1;
          break;
        } else if (startIdx == endIdx) {
          cnt2 += 1;
          break;
        } else {
          cnt3 += 1;
        }
      }
    }

    let orininalStr = palindromArr.join("");
    if (orininalStr == str1) {
      isPalindrome = true;
    }
  } catch (err) {
    console.error("Error in isStrPalindromeL " + err.message, err);
  }
  console.log(str1 + " is a palindrom: " + isPalindrome, cnt1, cnt2, cnt3);
  return isPalindrome;
};

let isPalindrome = isStrPalindrome(str1);
if (isPalindrome) {
  console.log(str1 + " is a palindrom: " + isPalindrome);
} else {
  console.log(str1 + " is not a palindrom: " + isPalindrome);
}

console.log(isStrPalindrome());
