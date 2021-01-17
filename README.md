# Work_Day_Planner

## Table of Contents

* [Overview](#Overview)
* [Installation](#Installation)
* [Features](#Features)
* [Improvements](#Improvements)
* [License](#license)


## Overview
The aim of this project was to create a daily planner in which you can save activities or things you have to do that day, within the time slots.  This will use local storage to save the items meaning if you refresh or reopen the page after it has close it will reopen the items that you saved in the time slots. It was also change the colour of the time slots in the depending on what time is currently is and the current time will be displayed at the top of the page.  Any time that has passed will be grey, any current time will be red and any time in the future will be green.

## Installation
In order to use as planner you will not be required to click or use any buttons to begin, as it will all load when you open the Web page.  In order to add an entry  Start typing in the input field between the time and the save button.  In order to save the entry you need to click the save button on the right this will then save it to the local storage and you'll be able to retrieve this if you refresh the page or close and reopen the page.  You will also be able to amend this and it will save over what you've already written when the save button is clicked.  All colour cordination for the time slots, in the past present and future, are already set so nothing needs to be done in order for the colours to change this will do so automatically according to the time, this is also displaed the top of screen in case you need to see what time it is.

You can find the application here:  https://oliviaowen1.github.io/Work_Day_Planner/.

## Features

This plan includes the current time function using Moment.js as well as using the time from Moment.js  To compare to the hour your writing in to tell you with he is a past present or future hour of the day.  These are colour coordinated using functions and if and else statements  In order to automatically appear on the loading of the page.  You can see 2 examples below of the time at 2 o'clock and 3 o'clock and the difference in changing from red to grey when the time goes from current to past.


![The current time 2PM in red, past in grey, future in green](https://raw.githubusercontent.com/oliviaowen1/Work_Day_Planner/main/Assets/Screenshot%202021-01-17%20at%2014.59.03.png)

<br>

![The current time now 3PM in red, past in grey, future in green](https://raw.githubusercontent.com/oliviaowen1/Work_Day_Planner/main/Assets/Screenshot%202021-01-17%20at%2015.30.00.png)

All items that are set in the future are green and once these become the current time the change to read what's there than in the past they will change to grey. 
This application uses local storage to save what the user types into the input field save this to the local storage, meaning if they refresh or close the page they can reopen it with all of their most recent inputs and this will automatically load. Users are also able to overwrite information by typing in the input box and saving once again. This will overwrite what is saved in the local storage, meaning its will always save the most recent input. You can see new events added and saved in the local storage below.

![New events added to time slots](https://raw.githubusercontent.com/oliviaowen1/Work_Day_Planner/main/Assets/Screenshot%202021-01-17%20at%2015.31.10.png)

<br>

![https://raw.githubusercontent.com/oliviaowen1/Work_Day_Planner/main/Assets/Screenshot%202021-01-17%20at%2015.31.26.png(https://raw.githubusercontent.com/oliviaowen1/Work_Day_Planner/main/Assets/Screenshot%202021-01-17%20at%2015.30.00.png)

## Improvements

If I were to do this task again I would aim to use use a loop instead of writing at each time separately  As this would save me repeating my work and having to change all the classes.  This would mean that anybody would have to amend my work in the future will be much easier for them to do so This would mean that anybody that would have to amend my work in the future, it will be much easier for them to do so, as it is better written, with less repetition and more condensed. 

## License
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.