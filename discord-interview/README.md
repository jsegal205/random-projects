# Discord Interview

Found on [Glassdoor Interviews](https://www.glassdoor.com/Interview/Discord-Interview-RVW18218269.htm)

## Interview Questions

Build an app from scratch using React and either Flux or Redux for state management.

- The app will have a button that when you click on it, a modal will open up.
- The modal will have two divs: one of the left side and one on the right.
  - The left side will have an input that allows a user to add a channel to the list.
  - Once a channel has been added and selected, the right side will have a text box with a save button so anytime a user edits the text in the text box and clicks Save, it will save to the state.
- When the modal closes, it should maintain the state and whatever channel was selected before the modal was closed.
- There are major bonus points for making the app look pretty.

Time Allowed: `45 minutes`

## Write up

Created with `npx create-react-app discord-interview`

From start

```sh
commit 16f73fff44a95985615c526190886579be53ef5a
Author: Jim Segal <hello@jimsegal.com>
Date:   Tue Feb 23 21:02:59 2021 -0600

    npx create-react-app discord-interview
```

to finish

```sh
commit 427d6f22828bd78eae3732013dea8ec002558ab4
Author: Jim Segal <hello@jimsegal.com>
Date:   Tue Feb 23 21:55:00 2021 -0600

    complete the challenge
```

Total Time:
`52 minutes`

As I was overtime, I would have likely been mid thoughts for finishing up pushing chat history to state when time was called. I assume I might not have gotten this far as talking through my thoughts and the nerves of just being interviewed would have caused some silly issues that I wouldn't have made while relaxed in my own environment.

It doesn't look super duper pretty, but meets all the criteria. I made the executive decision to bypass redux as hooks are built in and lighter weight than redux. I assume it would have taken me much longer to do this in redux as it's been a while since I have been using it.

## Next Steps given infinite time

- make it look like not a hot mess
  - remove redundant labels
  - move close button to top right (standard location)
  - have a fixed chat history that scrolls over the y max
  - colors
- input validation (don't allow blank fields)
- enter key submits when focused in inputs to closes submit button
- jest testing (snapshots mostly)

## Thoughts about the exercise

Fun little challenge. I think if I were to have had to make the modal by hand it would have really taken more time. I probably wouldn't have gotten as far also because of getting the challenge and having the timer start instead of reading the review, thinking "hey that would be cool to do", and then start to do it. The 10 minutes of should I do this or not let my subconcious work.
