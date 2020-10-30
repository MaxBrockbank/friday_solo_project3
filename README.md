<h1 align="center">||Friday Solo Project 3: Mr. Roboger's Neighborhood||</h1>
<div align="center">
<img src="https://github.com/MaxBrockbank.png" width="200px" height="auto" >
</div>
<p align="center">Authored by Max Brockabnk</p>
<p align="center">Updated on Oct 30, 2020</p>

## Description


## Required Technologies for Viewing/Working on These Project Files
* Modern Browser
* Text Editor

## Set-up Instructions
1. Clone this repo to your desktop
2. Open index.html in the browser of your choice
* <em>Alternatively you can just click [HERE](https://maxbrockbank.github.io/friday_solo_project3/)

## Technologies Used
* HTML
* CSS/Bootstrap
* Javascript/ jQuery

## Specs
* Describe: filterNumbers()

* Test: "It will loop through an array of checks [3, 2, 1] and test user input against each array index and return a boolean."
* Expect:(filterNumbers(3).toEqual(true))

* Test: "It will replace any number in the [3, 2, 1] array with the proper replacements in ["Beep!", "Boop!", "Won't you be my neighbor?"]"
* Expect: (filterNumbers(3).toEqual("Won't you be my neighbor?"))

* Test: "It will produce an array with all the numbers between userInput and 0."
* Expect: (filterNumbers(10).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))

* Test: "It will reverse the array containing the number range."
* Expect: (filterNumber(10).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

* Test: "It will combine all current test to work together. Start by creating the range array, then reversing it. After that search through the range array for matches to the checks array and replace the matches with the matching index in the replacements array."
* Expect: (filterNumber(10).toEqual(["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"]))

* Test: "It will make the output results reversed"
* Expect (filterNumber(["Beep", "Boop", "Won't you be my neighbor?", 4]).toEqual([4, "Won't you be my neighbor?", "Boop!", "Beep!"]))
## Known Bugs
* No bugs currently known (please inform project owner if any are found)


## Legal
* Copyright © 2020 Max Brockbank
* This software is licensed under the MIT license