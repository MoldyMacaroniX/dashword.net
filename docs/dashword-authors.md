# Dashword Authors

All authors are found in `_src/_data/`. To add a new author, just add a new object to the file.

## Author Object

An author object looks like this.

```json
{
    "key":"moldymacaronix",
    "name":"MoldyMacaroniX",
    "bio": "I am Moldy. Not literally, of course.",
    "photo":"https://yt3.ggpht.com/ytc/AKedOLQr8KPiI594vmcI02OJ-1eIHRwESVuzCRm1bsauNA=s900-c-k-c0x00ffffff-no-rj",
    "youtube":"moldymacaronix",
    "customyt":"true",
    "twitch":"moldymacaronix",
    "twitter":"moldymacaronix",
    "discord":"PqTUgx6",
    "gdbrowser":"CreatorMoldy",
    "verified": "true",
    "realVerified": "true"
}
```

### `key`

String value.

The author's unique ID. Make sure no two authors have the same `key`.

### `name` and `bio`

String values.

The name and bio of the author.

### `photo`

String value, but must be in the format of a valid link.

A link to the author's profile photo. Must end in the file extension (e.g. `.png` or `.jpg`)

### `youtube`, `twitch`, `twitter`, `discord`, `gdbrowser` (optional)

String values.

Identifiers for the author's respective social media accounts.

Below documents where the value for each of the social media items will place in terms of a link.

- `youtube`: youtube.com/c/**VALUE** (exception for if `customyt` or `handle` is set, see below)
- `twitch`: twitch.tv/**VALUE**
- `twitter`: twitter.com/**VALUE**
- `discord`: discord.gg/**VALUE**
- `gdbrowser`: gdbrowser.com/u/**VALUE**

If an author doesn't have a social media, **don't include the respective item.**

### `customyt`, `handle`,  `verified` and `realVerified`  (optional)

String values (yes I know these should be boolean values, but for now they're String values).

These values should read `true`.

**Do not include the respective item if it isn't to be included. Don't just mark it as false - get rid of it altogether.**

Include `customyt` if the `youtube` value above is set to a channel ID instead of a custom URL ID. This will change the link to:

- `youtube`: youtube.com/channel/**VALUE**

This is important, because both `/channel` and `/c/` do not work with the opposite type of ID.

Replace `customyt` with `handle` if the `youtube` value above is set to a handle instead of a custom URL, ID, or a channel ID. This will change the link to:

- `youtube`: youtube.com/@**VALUE**

Do not include the @ in the handle.

Include `verified` if the user is verified (see the verified requirements).
