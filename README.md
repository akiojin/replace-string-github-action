# replace-string-github-action

![Test][0]

This action replaces and returns the specified string.

## Usage

```yml
- name: Replace string
  uses: akiojin/replace-string-github-action@v0.1.0
  id: replace-string
  with:
    source: This is a pen
    find: pen
    replace: pencil
    all: true

steps.replace-string.outputs.value
```

## License

Any contributions made under this project will be governed by the [MIT License][1].

[0]: https://github.com/akiojin/replace-string-github-action/actions/workflows/Test.yml/badge.svg
[1]: https://github.com/akiojin/replace-string-github-action/blob/main/LICENSE
