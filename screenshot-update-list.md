# Screenshots Update List - Tag Status Component

Screenshots that need to be updated to show the new "Tag - Status" component styling and semantic colors.

## High Priority - Component Documentation

### Card - Status Component Screenshots
**Location:** `src/images/components/card-status/`

1. **card-status-with-tag.png**
   - **Shows:** Card Status with a status label displaying label, heading, body text, and action link
   - **Referenced in:** `src/_components/card/card-status.md` (line 71)
   - **Alt text:** "Card Status shows a status label, a heading, body text, and a link"
   - **Update needed:** Show new Tag - Status component styling

2. **card-status-with-error.png**
   - **Shows:** Card Status in error state with red border, status label, heading, error message, body text, and action link
   - **Referenced in:** `src/_components/card/card-status.md` (line 77)
   - **Alt text:** "Card Status with an error state, showing a status label, a heading, error text, body text, and a link. The card is wrapped in a red border to indicate an error."
   - **Update needed:** Show new Tag - Status error styling with semantic error color

### Card Component Screenshots
**Location:** `src/images/components/card/`

3. **card-with-status-indicator.png**
   - **Shows:** Card using a status with indicator (accommodates longer status labels)
   - **Referenced in:** `src/_components/card/index.md` (line 132)
   - **Alt text:** "A card using a status with indicator. Accommodates longer status labels."
   - **Update needed:** Update to show Tag - Status component for longer labels

4. **status.png**
   - **Shows:** Basic status display on card
   - **Referenced in:** Card component documentation
   - **Update needed:** Show new Tag - Status component styling

5. **status-long-label.png**
   - **Shows:** Status with longer labels
   - **Referenced in:** Card component documentation  
   - **Update needed:** Show Tag - Status handling of longer text

### Service List Item Component Screenshots
**Location:** `src/images/components/service-list-item/`

6. **annotated-service-list-item-component.png**
   - **Shows:** Service list item with header, Critical Action, Status Tag, details, and link
   - **Referenced in:** `src/_components/service-list-item.md` (line 186 in Card docs, main image for Service List Item)
   - **Alt text:** "A set of information—designed to be shown within a list—that contains a header, a bright call to action, a Status Tag, four sets of data formatted as 'Label: Value' pairs, and a link."
   - **Update needed:** Show gray Tag - Status component as specified in documentation ("Status must be represented by a gray Tag component")

## Medium Priority - Pattern Documentation

### Application Status Pattern Screenshots
**Location:** `src/images/patterns/help-users-to/stay-informed-of-their-application-status/`

7. **myva-status-cards.png**
   - **Shows:** Four Card component variations showing form/application submission status in My VA
   - **Referenced in:** `src/_patterns/help-users-to/stay-informed-of-their-application-status.md` (line 30)
   - **Alt text:** "Screenshots of 4 My VA status cards."
   - **Update needed:** Update all status indicators to use new Tag - Status component with appropriate semantic colors

## Tag - Status Component Specifications

When updating screenshots, ensure they reflect:

### Semantic Colors
- **Informational (default):** Blue - for helpful information or attention-worthy items
- **Warning:** Yellow/Orange - for warnings or negative consequences  
- **Success:** Green - to indicate success or completion
- **Error:** Red - for critical issues, failures, or items requiring immediate attention

### Design Requirements
- Colors align with Alert component conventions
- Service List Items specifically use gray Tag Status
- Consistent styling across all implementations
- Brief, scannable text (1-3 words when possible)
- Static labels (not interactive)

### Accessibility Requirements
- Screen readers announce "Status" before tag text (e.g., "Status, Error")
- Role="status" for programmatic announcements
- Clear semantic meaning through color and text
- Proper association with card headings

## Update Checklist

For each screenshot update:

- [ ] Use current VA Design System Tag - Status component
- [ ] Apply correct semantic color for the status type
- [ ] Ensure text follows content style guide (concise, plain language)
- [ ] Maintain consistent spacing and layout
- [ ] Verify accessibility color contrast requirements
- [ ] Test at different viewport sizes if applicable
- [ ] Update corresponding alt text if visual changes affect meaning
- [ ] Verify screenshots match current Storybook examples

## Related Documentation to Review

- `src/_components/tag/tag-status.md` - Tag - Status component specification
- `src/_components/tag/index.md` - General tag guidance with Tag vs Tag - Status comparison
- `src/_components/card/card-status.md` - Card Status implementation details
- `src/_components/service-list-item.md` - Service List Item with status requirements
- Storybook examples for va-tag-status component

---

**Last Updated:** February 23, 2026
**Total Screenshots:** 7 files across 4 component/pattern areas