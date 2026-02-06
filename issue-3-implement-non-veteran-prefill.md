# Issue 3: 21-4138 implement prefill pattern as someone else besides the Veteran

## Description
This issue tracks the implementation of the prefill pattern for form 21-4138 (Submit a statement to support a claim) when the logged in user is someone other than the Veteran (e.g., representative, family member, VSO, attorney).

## Background
Some users submitting a statement on behalf of a Veteran need a different prefill experience. The form should distinguish between the logged-in user's information and the Veteran's information, prefilling what's appropriate for each role.

## Prerequisites
- Issue #1 (Identify logged in user is the Veteran) must be completed
- Issue #2 (Implement prefill pattern as logged in Veteran) must be completed

## References
- **Figma Design**: https://www.figma.com/design/w2tRlZ5qJSOF968XoWzBRg/Staging-%7C-21-4138---Submit-a-statement-to-support-a-claim?node-id=3822-19206&p=f&m=dev
- **Mock Form**: https://staging.va.gov/mock-form-prefill/introduction

## Tasks
- [ ] Identify user roles that can submit on behalf of a Veteran (representative, POA, family, VSO, attorney)
- [ ] Define which fields should be prefilled for each non-Veteran role
- [ ] Determine how to handle Veteran information when submitter is not the Veteran
- [ ] Implement role-based prefill logic
- [ ] Add user messaging to clarify submitter vs. Veteran information
- [ ] Implement separate edit capabilities for submitter and Veteran fields
- [ ] Handle cases where Veteran information is not available
- [ ] Create unit tests for non-Veteran prefill scenarios
- [ ] Test with various representative types and permissions

## Acceptance Criteria
- [ ] System correctly identifies non-Veteran users and their relationship to the Veteran
- [ ] Appropriate fields are prefilled based on user role and available permissions
- [ ] Clear distinction between submitter information and Veteran information in the UI
- [ ] Users can provide Veteran information when not available in the system
- [ ] Form handles different representative types (POA, family member, VSO, attorney, etc.)
- [ ] Validation ensures required Veteran information is collected
- [ ] User messaging clearly explains what information is needed and why
- [ ] Unit tests cover all non-Veteran user scenarios
- [ ] Integration tests verify role-based prefill functionality
- [ ] Accessibility testing confirms all fields and relationships are clearly announced
- [ ] Edge cases are handled (e.g., expired POA, multiple representatives)
- [ ] Privacy and security requirements are met for accessing Veteran data

## Labels
- `platform-design-system-team`
- `21-4138`
- `prefill-pattern`
- `component-update`

## Related Work
This is part 3 of a 3-part series for implementing the 21-4138 prefill pattern:
1. Identify the logged in user is the Veteran
2. Implement prefill pattern as the logged in Veteran
3. **Implement prefill pattern as someone else besides the Veteran** (this issue)
