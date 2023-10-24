# Dashword Authors

All authors are found in `_src/_data/`. To add a new author, just add a new object to the end of the file.

## Author Object

An author object looks something like this.

```json
{
    "key":"moldymacaronix",
    "name":"Moldy",
    "bio": "I am Moldy. Not literally, of course.",
    "photo":"https://www.moldygd.com/assets/logo.png",
    "youtube":"MoldyGD",
    "handle":true,
    "twitch":"moldygd",
    "twitter":"moldymacaronix",
    "discord":"PqTUgx6",
    "gdbrowser":"CreatorMoldy",
    "verified": true,
}
```

### `key` (String)

The author's unique ID. Make sure no two authors have the same `key`. Only use lowercase letters.

### `name` and `bio` (Strings)

The name and bio of the author. Keep bios short, preferably only a sentence or two.

### `photo` (String)

Must be a valid link.

A link to the author's profile photo. Must end in the file extension (e.g. `.png` or `.jpg`)

This is not optional, but if you don't want to use a profile photo, you can set it to `/assets/img/user.png`, which is a default profile photo.

### `youtube`, `twitch`, `twitter`, `discord`, `gdbrowser` (Strings, optional)

Identifiers for the author's respective social media accounts.

Below documents where the value for each of the social media items will place in terms of a link.

- `youtube`: youtube.com/c/**VALUE** (exception for if `customyt` or `handle` is set, see below)
- `twitch`: twitch.tv/**VALUE**
- `twitter`: twitter.com/**VALUE**
- `discord`: discord.gg/**VALUE**
- `gdbrowser`: gdbrowser.com/u/**VALUE**

If an author doesn't have a social media, **don't include the respective item.**

### `customyt`, `handle`,  `verified`, `partner`, and `staff`  (Booleans, optional)

These values should read `true`.

**To keep things clean, try not to include the respective item if it doesn't need to be included. Don't just mark it as false - get rid of it altogether.**

Include `customyt` if the `youtube` value above is set to a channel ID instead of a custom URL ID. This will change the link to:

- `youtube`: youtube.com/channel/**VALUE**

This is important, because both `/channel/` and `/c/` do not work with the opposite type of ID.

Replace `customyt` with `handle` if the `youtube` value above is set to a handle instead of a custom URL, ID, or a channel ID. This will change the link to:

- `youtube`: youtube.com/@**VALUE**

Do not include the @ in the handle.

Include `verified` if the user is verified (see the [verified requirements](https://www.dashword.net/verified/)).

Include `partner` if the user is an official partner of Dashword, i.e. another Geometry Dash community or website that we've partnered with.

Include `staff` if the user is a Dashword staff or official Dashword profile.