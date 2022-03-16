# Calculator

## About and Approach
- A simple calculator app, used to improve my javacript and compare approaches to building software (see below).
- This approach is procedural, not test-driven, and does not even use automated testing.

## Learnings 

Learnings:
- *Is it working?* - Difficult to be certain that the program is behaving as intended. Obvious that small changes can break test cases that were working previously, and I am loathed to remember and retry every possible test case manually.
- *Edge cases* - Difficult to say if I have considered all edge cases because I have not been recording those I have covered in a systematic way.
- *Bloated solution* - my intinct is that the solution is rather large and clunky. It involves a lot of looping, a lot of which is nested. My gut is that there is a simpler and more elegant solution out there, rather than this (the first I settled on that had to have many logic 'bolt ons' as I realised the complexity of the task).
- *Unrefactored* - little ongoing refactoring, as concentration is entirely on getting it to work via my predefined plan. Have ended up with a very large method (calculateSumString) and I can feel that the logic may be tricky to extend (e.g. what if I want to include other operators or parentheses?).

Conclusion:
- Many of the projjects at my current work I can broadly get away without unit testing. However, smaller logic-heavy apps like this with many edge cases to consider will massively benefit from a TDD (or at least tested) approach.


## Description

- Numbers can be clicked sequentially, with the resulting single or multi-digit number appearing on the screen.
- Clicking an operator highlights the operator clicked and allows the user to start typing the next single or multi-digit number
- Clicking equals clears the screen and replaces with the answer of the calculation. This calcuates the result of the sum the user has typed so far following BEDMAS rules.
- User can then continue further sums, with the existing answer as the starting point.

## Screenshot
![screenshot](https://github.com/Will-Helliwell/calculator/blob/main/public/Screenshot%202022-03-16%20at%2016.08.24.png)