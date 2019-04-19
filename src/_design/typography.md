---
layout: default
title: Typography
tags: Fonts, Lists, Links, Headings, Paragraphs 
anchors:
  - anchor: Fonts
  - anchor: Headings
  - anchor: Paragraphs
  - anchor: Lists
  - anchor: Links
---

# Typography

## Fonts




<section id="sans" class="usa-grid-full">
    <h4>Source Sans Pro (<tt>.vads-u-font-family--sans</tt>)</h4>

    <div>
        <div class="usa-width-one-half">
            <p><a href="https://fonts.google.com/specimen/Source+Sans+Pro">Source Sans Pro</a> is an open-source sans serif typeface created for legibility in UI design. With a variety of weights that read easily at all sizes, Source Sans Pro provides clear headers as well as highly-readable body text.</p>
            <p>Inspired by twentieth-century American gothic typeface design, its slender but open letters offer a clean and friendly simplicity. Advanced hinting allows Source Sans Pro to render well on Windows systems which run Cleartype, and across browsers
                and devices. Moreover, it supports a variety of languages and alphabets, including Western and European language, Vietnamese, pinyin Romanization of Chinese, and Navajo.</p>

        </div>

        <div class="vads-u-font-family--sans typography-sans-intro usa-width-one-half usa-end-row">
            <span class="text-huge">Aa</span>
            <div>
                <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
            </div>
        </div>
    </div>
</section>

---

<section class="usa-grid-full">
    <h4>Bitter (<tt>.vads-u-font-family--serif</tt>)</h4>

    <div>
        <div class="usa-width-one-half">
            <p>People read and interact with text on screens more and more each day. What happens on screen ends up being more important than what comes out of the printer. With the accelerating popularity of electronic books, type designers are working
                hard to seek out the ideal designs for reading on screen.</p>
            <p>Motivated by my love for the pixel I designed <a href="https://fonts.google.com/specimen/Bitter">Bitter</a>. A “contemporary” slab serif typeface for text, it is specially designed for comfortably reading on any computer or device. The robust design started from the austerity of the pixel grid,
                based on rational rather than emotional principles. It combines the large x-heights and legibility of the humanistic tradition with subtle characteristics in the characters that inject a certain rhythm to flowing texts.</p>
            <p>Bitter has little variation in stroke weight and the Regular is thicker than a normal ‘Regular’ style for print design. This generates an intense color in paragraphs, accentuated by the serifs that are as thick as strokes with square terminals.</p>
            <p>Each glyph is carefully designed with an excellent curve quality added to the first stage of the design, that was entirely made in a pixel grid. The typeface is balanced and manually spaced to use very few kerning pairs, especially important
                for web font use since most browsers do not currently support this feature.</p>

        </div>

        <div class="vads-u-font-family--serif typography-bitter-intro usa-width-one-half usa-end-row">
            <span class="text-huge">Aa</span>
            <div>
                <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
            </div>
        </div>
    </div>
</section>

---


<style scoped>
    .text-tiny {
        margin: 5px initial 0;
    }

    .text-tiny:first-child {
        margin-top: 0;
    }

    .text-huge {
        font-size: 140px;
        line-height: 1.05;
    }

    .text-tiny {
        font-size: 15px;
    }

    .typography-serif-intro .text-huge {
        font-size: 120px;
        line-height: 1.275;
    }

    .typography-serif-intro .text-tiny {
        font-size: 13px;
    }

    .usa-grid-full {
      max-width: none;
    }
</style>



## Headings

<div class="site-c-showcase">
  {% include_relative html/headings.html %}
</div>

{% include snippet.html content='html/headings.html' %}

### Headings and accessibility

**Always** use semantic headings, logically nested in the proper order.  **Do not** use improper nesting to achieve a different font size. In other words, an `h1` should never be followed by an `h3`; it should only be followed by an `h2`. Use the [font-size utility](../utilities/font-size) to change the font size of a semantic heading instead.

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Do</h3>
<div class="do-dont__content" markdown="1">
Use utility classes to change the font size of a semantic heading.

#### Example
```html
<h1>Main heading</h1>

<p>Some text</p>

<h2 class="vads-u-font-size--h3">Secondary heading</h2>
```

</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Don’t</h3>
<div class="do-dont__content" markdown="1">
Don’t change heading level in order to use a different font size.

#### Example
```html
<h1>Main heading</h1>

<p>Some text</p>

<h3>Secondary heading</h3>
```
</div>
</div>
</div>

## Paragraphs

<div class="site-c-showcase">
  {% include_relative html/paragraphs.html %}
</div>

{% include snippet.html content='html/paragraphs.html' %}

## Lists
<div class="site-c-showcase">
  {% include_relative html/lists.html %}
</div>

{% include snippet.html content='html/lists.html' %}

## Links
<div class="site-c-showcase">
  {% include_relative html/links.html %}
</div>

{% include snippet.html content='html/links.html' %}
