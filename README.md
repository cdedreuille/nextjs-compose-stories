# Test

To test this set up please run `yarn install` at the root + `yarn install` on `/website`.

`/website` is a Next.js app independant from workspaces.

## Problem

I'm trying to get stories from `/packages/canon` but `/website` is isolated from the rest of the repo so I'm using relative paths to get stories. If you run the website on `yarn dev` and see the two pages I created you can see that on the client version using `use client;` the components appears correctly but I get an error in the terminal and a 500 error in the console.

This error doesn't seem to come from fetching the component as if you just `console.log(composeStories)` you'll see the same error.

Is there's something wrong in my setup? Or is this a bug on the function itself?

Thanks 🙏
