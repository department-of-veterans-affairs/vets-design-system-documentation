---
layout: component
title: Language toggle
intro-text: "The language toggle is our way of providing translated versions of select pages on va.gov."
github-title: va-language-toggle
research-title: va-language-toggle
status: use-with-caution-available
anchors:
  - anchor: Examples
  - anchor: Usage
  - anchor: Code usage
  - anchor: Content considerations
  - anchor: Accessibility considerations
  - anchor: Related
---

## Examples

### Default

{% include component-example.html alt="The language toggle with the spanish option selected." file="/images/components/language-toggle/spanish.png" caption="The language toggle allows users to click links to load the same page which has been translated to one of three languages." %}

#### Page context

{% include component-example.html alt="Some, but not all, of the content on a page will be translated." file="/images/components/language-toggle/page-context.png" caption="Translated content appears in the body of the page, in the side navigation, and in the breadcrumbs of the page." %}

## Usage

### When to use Component name

* **Presenting an option to switch between translated pages.**: Use this component when you want to provide the user a way to switch between translated versions of the same page.

### When to consider something else

* **Links to pages that don't match.**: Do not use this toggle to point to anything other than the corresponding page in the equivalent language.
* **Other language options.** VA.gov supports the 3 languages identified in the toggle. Do not add or remove from those 3 languages.

### How this component works

* **Provides navigation to the same page at a different URL.** The language toggle uses links to navigate the user to the same page, in a different language, and at a different URL. Currently, the language code does not match [ISO language codes](https://www.loc.gov/standards/iso639-2/php/code_list.php) but should conform in future. 
  * Example English (default) URL: [https://www.va.gov/health-care/covid-19-vaccine/](https://www.va.gov/health-care/covid-19-vaccine/)
  * Example Spanish URL: [https://www.va.gov/health-care/covid-19-vaccine-esp/](https://www.va.gov/health-care/covid-19-vaccine-esp/)
  * Example Tagalog URL: [https://www.va.gov/health-care/covid-19-vaccine-tag/](https://www.va.gov/health-care/covid-19-vaccine-tag/)

### Behavior

* **Navigates to the same page in a different language.** When selected, the language toggle brings the user to the alternate language version of the page they were on.
* **Body content, side navigation, breadcrumbs, and any alerts are translated.** Currently (01/2024), the expectation is that the following sections of the page are translated:
  * Main content of the page 
  * The parent and sibling pages within the [side navigation menu]({{ site.baseurl }}/components/sidenav)
  * The current page title in the [Breadcrumbs]({{ site.baseurl }}/components/breadcrumbs)
  * Any [Alert]({{ site.baseurl }}/components/alert) shown to a user
* **Set the correct lang attribute value.** See [Accessibility considerations](#accessibility-considerations).

### Placement

The component appears 32px below the "In this section" menu and 24px above the h1 of the page at mobile viewport width. It retains those same margins at desktop width however it is from the top of the `.usa-content` main article container for the page as "In this section" morphs into the Sidenav.

### Instances of this component in production

#### COVID-19 vaccines at VA

* [COVID-19 vaccines at VA](https://www.va.gov/health-care/covid-19-vaccine/)
* [Vacunas contra el COVID-19 en VA](https://www.va.gov/health-care/covid-19-vaccine-esp/)
* [Mga bakuna sa COVID-19 sa VA](https://www.va.gov/health-care/covid-19-vaccine-tag/)

#### The PACT Act and your VA benefits

* [The PACT Act and your VA benefits](https://www.va.gov/resources/the-pact-act-and-your-va-benefits/)
* [La Ley PACT y sus beneficios de VA](https://www.va.gov/resources/the-pact-act-and-your-va-benefits-esp/)
* [Ang PACT Act at ang iyong mga VA benefits](https://www.va.gov/resources/the-pact-act-and-your-va-benefits-tag/)

## Content considerations

* **Link is in native language.** Links in this component should be in the native language. For example, "Español". Note: Sometimes the word is the same in both English and the target language, for example "Tagalog".

## Accessibility considerations

* **The language of the page should be identified using the HTML lang attribute.** For example, `<article class="usa-content" lang="es">`. The `lang` attribute is also added to the `<main>` element. This may disagree with the lang attribute of the `<html>` element. Please see [H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG21/Techniques/html/H58).
* **Label the language toggle code**. This ensures that it is spoken in the correct language if read aloud by assistive technologies. The `lang` value on the link should match that of the resulting page it links to.

## Related

* [Breadcrumbs]({{ site.baseurl }}/components/breadcrumbs)
* [Sidenav]({{ site.baseurl }}/components/sidenav)

<!-- TODO: Once we build this component, add the checklist -->
<!-- include _component-checklist.html component_name=page.web-component -->