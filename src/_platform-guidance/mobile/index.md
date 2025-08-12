---
layout: documentation
title: Mobile app implementation guide
permalink: /platform-guidance/mobile/
intro-text: Guidelines for implementing VA Design System components in the VA Health and Benefits mobile app using React Native.
anchors:
  - anchor: React Native implementation
  - anchor: iOS specific considerations
  - anchor: Android specific considerations  
  - anchor: Accessibility implementation
  - anchor: Performance considerations
---

## React Native implementation

### Component structure
Mobile app components follow React Native patterns:
```javascript
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { VAButton } from '@department-of-veterans-affairs/mobile-component-library';

const MyComponent = () => {
  return (
    <View>
      <VAButton onPress={handlePress} title="Submit" />
    </View>
  );
};
```

### Styling approach
- Use StyleSheet for consistent styling
- Follow platform-specific design patterns
- Implement responsive behavior using device dimensions
- Support both light and dark themes

### Navigation integration
Components should integrate with React Navigation:
- Support stack navigation patterns
- Handle deep linking appropriately
- Maintain navigation state during component interactions

## iOS specific considerations

### Design patterns for native iOS app
Follow iOS Human Interface Guidelines:
- Use iOS-appropriate navigation patterns for native apps
- Implement iOS-style action sheets and alerts
- Follow iOS typography and spacing conventions for native apps

### iOS accessibility for native apps
- Implement VoiceOver support using accessibility props
- Support Dynamic Type for text scaling
- Test with Switch Control and AssistiveTouch
- Respect Reduce Motion preferences

### Platform APIs
Integrate with iOS-specific features:
- Haptic feedback using appropriate iOS APIs
- Integration with iOS notifications
- Support for iOS keyboard shortcuts (external keyboard)

## Android specific considerations

### Material Design for native Android app
Follow Android Material Design guidelines:
- Use Android-appropriate navigation patterns (bottom navigation, drawer navigation) for native apps
- Implement Material Design components where applicable
- Follow Android typography and color schemes

### Android accessibility for native apps
- Implement TalkBack support using accessibility props
- Support Android font size preferences
- Test with Switch Access and other assistive technologies
- Respect Android accessibility shortcuts and gestures

### Platform APIs
Integrate with Android-specific features:
- Android notification patterns
- Integration with Android system UI
- Support for Android hardware back button

## Accessibility implementation

### Screen reader support
```javascript
<TouchableOpacity
  accessibilityLabel="Submit application"
  accessibilityHint="Double tap to submit your benefits application"
  accessibilityRole="button"
  accessibilityState={{ disabled: isLoading }}
>
  <Text>Submit</Text>
</TouchableOpacity>
```

### Touch target requirements
- Minimum 44px x 44px touch targets
- Adequate spacing between touch targets (8px minimum)
- Clear visual feedback for touch interactions

### Testing checklist
- [ ] VoiceOver testing on iOS native app
- [ ] TalkBack testing on Android native app  
- [ ] Switch Control/Switch Access testing
- [ ] Touch target size verification (44px minimum)
- [ ] External keyboard navigation (when connected to mobile device)
- [ ] Dynamic Type/font scaling testing

## Performance considerations

### Rendering optimization
- Use FlatList for long lists
- Implement lazy loading for heavy components
- Optimize image loading and caching
- Use React.memo for pure components

### Memory management
- Clean up event listeners and subscriptions
- Optimize bundle size
- Monitor memory usage during development

### Network considerations
- Handle offline states gracefully
- Implement appropriate loading states
- Cache critical data locally
- Optimize API calls and data fetching

### Battery optimization
- Minimize background processing
- Optimize animation performance
- Use efficient rendering techniques
- Implement proper component lifecycle management
