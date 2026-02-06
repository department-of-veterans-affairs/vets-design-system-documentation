# Issue 2: 21-4138 implement prefill pattern as the logged in Veteran

## Description
This issue tracks the implementation of the prefill pattern for form 21-4138 (Submit a statement to support a claim) when the logged in user is the Veteran.

## Background
When a Veteran is logged in and starts the 21-4138 form, the system should prefill their personal information (name, contact details, VA file number, etc.) to streamline the form completion process and reduce errors.

## Prerequisites
- Issue #1 (Identify logged in user is the Veteran) must be completed

## References
- **Figma Design**: https://www.figma.com/design/w2tRlZ5qJSOF968XoWzBRg/Staging-%7C-21-4138---Submit-a-statement-to-support-a-claim?node-id=3822-19206&p=f&m=dev
- **Mock Form**: https://staging.va.gov/mock-form-prefill/introduction

## Tasks
- [ ] Identify which fields should be prefilled for Veterans
- [ ] Map data sources to form fields (VA Profile, MPI, etc.)
- [ ] Implement prefill logic for logged in Veteran scenario
- [ ] Add user messaging to explain prefilled data
- [ ] Implement edit capability for prefilled fields
- [ ] Add validation for prefilled data
- [ ] Create unit tests for prefill functionality
- [ ] Test prefill with various Veteran profiles

## Acceptance Criteria
- [ ] Veteran's personal information is correctly prefilled when they are logged in
- [ ] All required fields are populated from appropriate data sources
- [ ] Veterans can review and edit prefilled information
- [ ] Clear messaging indicates which information was prefilled
- [ ] Prefill works consistently across different authentication states
- [ ] Form validation properly handles prefilled data
- [ ] Unit tests achieve >80% code coverage for prefill logic
- [ ] Integration tests verify end-to-end prefill functionality
- [ ] Accessibility testing confirms prefilled fields are properly announced to screen readers
- [ ] Performance testing shows no degradation with prefill enabled

## Labels
- `platform-design-system-team`
- `21-4138`
- `prefill-pattern`
- `component-update`

## Related Work
This is part 2 of a 3-part series for implementing the 21-4138 prefill pattern:
1. Identify the logged in user is the Veteran
2. **Implement prefill pattern as the logged in Veteran** (this issue)
3. Implement prefill pattern as someone else besides the Veteran
