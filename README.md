<h1 align="center">
  Toposware Website (Gatsby)
</h1>

## Quickstart
**Start Development Server**

```shell
npm run dev 
```

**Local Env Variables**

Inside the `.env` 

```
# For Contentful
TOPOS_CONTENTFUL_SPACE_ID="" 
TOPOS_CONTENTFUL_ACCESS_TOKEN=""

# Google Analytics
TOPOS_GA_TRACKING_ID="A-TRACKING_ID"

# from contentful website settings 
WEBSITE_SETTING_ENTRY_ID=""
```

**Website Settings**

`Website Setting` is a model inside Contentful. It allows you to configure website title, home page, the main navigation and the footer navigation. You must set a `Website Setting` entry ID as `WEBSITE_SETTING_ENTRY_ID` in the env. 

![website-entry-id](https://github.com/the-watchmaker/topos/assets/4682613/3ff560cd-18db-483b-8a01-a7ece103535e)


## Overview

This Gatsby application generates pages and posts from contents from Contentful. Pages and posts are assembled with `sections` and `blocks` and other smaller elements such as `media assets` and `links.`

It allows content writers to freely create and edit pages with minimum help from developers This type of block-based approach is used in conventional page builders such as Webflow, Elementor and Gutenberg editor. 

## Page/Post Structure

The website is made of

- pages
    - Sections in vertical scroll (default)
        - Blocks
    - Sections in horizontal scroll
        - Block:Slide
            - Slide:Card
- posts
    - Post blocks

The diagram shows how they are related and how styles are inherited.

<img width="560" alt="structure-and-style-higherarchy" src="https://github.com/the-watchmaker/topos/assets/4682613/e95431e6-97fd-4e39-a3e6-f73165d5c7d2">

## Blocks

### Block:Hero
### Block:Text
### Block:Space
### Block:Full-width Text
### Block:Hard Coded
### Block:Form
- Form:Field
### Block:Link Group
### Block:Page List
### Block:Post List
### Block:Post Preview
### Block:Slide
- Slide:Card

## Variables
### Buttons and Links
### Asset:Color
### Authors

## Post
### Post:Image
### Post:Content
### Post:Math Formula


## Misc

### Name Convention

Every entry has a name that has no functional purpose but solely for internal reference, meaning you can enter whatever name and it will not affect the rendering. 

For example, in the screenshot below, you can see 2 sections that are inside "Home" page. Without these names, users will not be able to tell what these sections are for. You might need a naming rule in the future that suits your organization's needs.

