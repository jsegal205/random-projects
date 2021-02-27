# Profanity Filter

Create a profanity filter that supports homoglyphs/leetspeak

Started:

```sh
commit e9420d5cf340a988dff6f33a3dff6deb223b15a3
Author: Jim Segal <hello@jimsegal.com>
Date:   Sat Feb 27 10:54:11 2021 -0600

    init profanity filter
```

Finished:

```sh
commit 44cd1a7d73739e96966c7d16fae23103c3ac413b (HEAD -> main)
Author: Jim Segal <hello@jimsegal.com>
Date:   Sat Feb 27 12:28:09 2021 -0600

    add logic and tests
```

Assumptions:

- This replaces the word with a single asterisk (`*`). Can be updated to return just `true/false` simply

Recap:

- I was halfway distracted while trying to multi task this and watch Twitch
- I'm pretty bad with regex
  - even though this is just regex match, it took me a while to get explicit character match for parens
- I think this could be more efficient but ultimately I ended up creating a master list of words with character substitution

Next steps:

- finish filling out full list of letter substitutions
- look at multiple consistent letters for potential bad word
  - `baaaaaaaad` would be deemed profanity
  - this needs a magic number to say how many consistent letters, maybe there are actual use cases for that.
- translations of words without explicit character substitute
  - `bad -> 壞的`
