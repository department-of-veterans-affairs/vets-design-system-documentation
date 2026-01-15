/**
 * Utilities for fetching and parsing VA component documentation
 * from published JSON sources for both web and mobile components
 */

// Data sources
const WEB_COMPONENT_DOCS_URL =
  'https://unpkg.com/@department-of-veterans-affairs/web-components@latest/component-docs.json';

const MOBILE_COMPONENT_DOCS_URL =
  'https://raw.githubusercontent.com/department-of-veterans-affairs/vets-design-system-documentation/main/src/_data/mobile-app-component-docs-source.json';

// Cache the fetched data
let cachedWebDocs: WebComponentDocsData | null = null;
let cachedMobileDocs: MobileComponentDocsData | null = null;

/**
 * Types for Web Components (Stencil docs-json format)
 */
export interface WebComponentProp {
  name: string;
  type: string;
  attr?: string;
  docs: string;
  default?: string;
  optional?: boolean;
  required?: boolean;
  mutable?: boolean;
  reflectToAttr?: boolean;
}

export interface WebComponentEvent {
  event: string;
  detail: string;
  bubbles: boolean;
  composed: boolean;
  docs: string;
}

export interface DocsTag {
  name: string;
  text?: string;
}

export interface WebComponentDoc {
  tag: string;
  encapsulation: string;
  docs: string;
  docsTags: DocsTag[];
  props: WebComponentProp[];
  events: WebComponentEvent[];
  slots: { name: string; docs: string }[];
  methods: { name: string; docs: string; signature: string }[];
  dependencies: string[];
  dependents: string[];
}

export interface WebComponentDocsData {
  timestamp: string;
  compiler: {
    name: string;
    version: string;
    typescriptVersion: string;
  };
  components: WebComponentDoc[];
}

/**
 * Types for Mobile Components
 */
export interface MobileComponentProp {
  name: string;
  type: string;
  docs: string;
  default?: string;
  required?: boolean;
}

export interface MobileComponentEvent {
  name: string;
  docs: string;
}

export interface MobileComponentDoc {
  tag: string;
  docs: string;
  props: MobileComponentProp[];
  events: MobileComponentEvent[];
}

export interface MobileComponentDocsData {
  timestamp: string;
  components: MobileComponentDoc[];
}

/**
 * Unified prop format for PropsTable
 */
export interface UnifiedProp {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

export interface UnifiedEvent {
  name: string;
  description: string;
  detail?: string;
}

/**
 * Fetch web component docs from unpkg
 */
export async function fetchWebComponentDocs(): Promise<WebComponentDocsData> {
  if (cachedWebDocs) {
    return cachedWebDocs;
  }

  const response = await fetch(WEB_COMPONENT_DOCS_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch web component docs: ${response.statusText}`);
  }

  cachedWebDocs = await response.json();
  return cachedWebDocs!;
}

/**
 * Fetch mobile component docs from GitHub
 */
export async function fetchMobileComponentDocs(): Promise<MobileComponentDocsData> {
  if (cachedMobileDocs) {
    return cachedMobileDocs;
  }

  const response = await fetch(MOBILE_COMPONENT_DOCS_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch mobile component docs: ${response.statusText}`);
  }

  cachedMobileDocs = await response.json();
  return cachedMobileDocs!;
}

/**
 * Get documentation for a web component by tag name
 */
export async function getWebComponentDoc(tag: string): Promise<WebComponentDoc | null> {
  const docs = await fetchWebComponentDocs();
  return docs.components.find((c) => c.tag === tag) || null;
}

/**
 * Get documentation for a mobile component by tag name
 */
export async function getMobileComponentDoc(tag: string): Promise<MobileComponentDoc | null> {
  const docs = await fetchMobileComponentDocs();
  return docs.components.find((c) => c.tag === tag) || null;
}

/**
 * Get the display name from web component docsTags
 */
export function getWebComponentName(component: WebComponentDoc): string {
  const nameTag = component.docsTags.find((t) => t.name === 'componentName');
  return nameTag?.text || component.tag;
}

/**
 * Get the maturity level from web component docsTags
 */
export function getWebMaturityLevel(component: WebComponentDoc): string {
  const maturityTag = component.docsTags.find((t) => t.name === 'maturityLevel');
  return maturityTag?.text || 'unknown';
}

/**
 * Transform web component props to unified format
 */
export function transformWebPropsForTable(props: WebComponentProp[]): UnifiedProp[] {
  return props.map((prop) => ({
    name: prop.attr || prop.name,
    type: prop.type,
    default: prop.default?.replace(/^['"]|['"]$/g, '') || undefined,
    required: prop.required || false,
    description: prop.docs,
  }));
}

/**
 * Transform web component events to unified format
 */
export function transformWebEventsForTable(events: WebComponentEvent[]): UnifiedEvent[] {
  return events.map((event) => ({
    name: event.event,
    description: event.docs,
    detail: event.detail !== 'void' ? event.detail : undefined,
  }));
}

/**
 * Transform mobile component props to unified format
 */
export function transformMobilePropsForTable(props: MobileComponentProp[]): UnifiedProp[] {
  return props.map((prop) => ({
    name: prop.name,
    type: prop.type,
    default: prop.default,
    required: prop.required || false,
    description: prop.docs,
  }));
}

/**
 * Transform mobile component events to unified format
 */
export function transformMobileEventsForTable(events: MobileComponentEvent[]): UnifiedEvent[] {
  return events.map((event) => ({
    name: event.name,
    description: event.docs,
  }));
}

/**
 * Get all available web component tags
 */
export async function getAllWebComponentTags(): Promise<string[]> {
  const docs = await fetchWebComponentDocs();
  return docs.components.map((c) => c.tag).sort();
}

/**
 * Get all available mobile component tags
 */
export async function getAllMobileComponentTags(): Promise<string[]> {
  const docs = await fetchMobileComponentDocs();
  return docs.components.map((c) => c.tag).sort();
}
