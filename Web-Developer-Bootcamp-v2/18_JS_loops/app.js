// for loop
const subreddits = ["cringe", "books", "aww"];

for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

// for ... of loop - for iterating through array without needing index
for (let subreddit of subreddits) {
  console.log(`Visit reddit.com/r/${subreddit}`);
}

// for ...
