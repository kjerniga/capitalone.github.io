The only parts of this template intended to be modified are in the config folder.
The word "my" implies the ability to change to any string.
These changes may include:

background.png
This is the background used by default in config/style.css.  This can be changed or removed.

section-about.json
This is the bottom section.  It is a set of headers and text.  It can accept unlimited subsections.
It requires the following json format:
{
  "myId1": {
    "header": "My Header 1",
    "text": "My Text 1"
  },
  "myId2": {
    "header": "My Header 2",
    "text": "My Text 2"
  }
}

section-intro.json
This is the top section.  It rotates each section so that only one is viewable at a time.  It can accept unlimited sections.
It requires the following json format:
{
  "myId1": {
    "header": "My Header 1",
    "text": "My Text 1"
  },
  "myId2": {
    "header": "My Header 2",
    "text": "My Text 2"
  }
}

section-menu.json
This is the top menu.  It must have exactly 1 image, 1 URL, 1 Title, and 3 Menu items.
It requires the following json format:
{
  "header": "My Header",
  "image": "my/path/to/image.png",
  "image_url": "//my.url.com/",
  "tab1": "My Tab 1",
  "tab2": "My Tab 2",
  "tab3": "My Tab 3"
}

selection-source-code.json
This is the middle section with headers, images, text, and links.  It can accept unlimited sections.
It requires the following json format:
{
  "My Header 1": {
    "myId1": {
      "name": "My Title 1",
      "image": "my/path/to/image1.png",
      "description": "My Description 1",
      "git_hub_url": "//my.url.com/1/"
    },
    "myId1": {
      "name": "My Title 2",
      "image": "my/path/to/image2.png",
      "description": "My Description 2",
      "git_hub_url": "//my.url.com/2/"
    }
  },
  "My Header 2": {
    "myId1": {
      "name": "My Title 1",
      "image": "my/path/to/image1.png",
      "description": "My Description 1",
      "git_hub_url": "//my.url.com/1/"
    },
    "myId1": {
      "name": "My Title 2",
      "image": "my/path/to/image2.png",
      "description": "My Description 2",
      "git_hub_url": "//my.url.com/2/"
    }
  }
}

style.css
This is where you can customize the style of each section.  See style.css for details.