# Run Dashword Locally

It is important to use a local dev environment when working on Dashword (including when you're adding or editing content). This is because while editing directly through GitHub is easy, it also makes it easy for bugs to find their way on the live site.

When adding or editing content, always check to make sure it works in a local dev environment **BEFORE** asking to merge it.

## Installation

1. Clone the repo
    ```sh
    git clone https://github.com/MoldyMacaroniX/gd-website.git
    ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run Eleventy
   ```sh
   npx eleventy --serve
   ```
This will create an instance at [http://localhost:8080/](http://localhost:8080/).