import {
  maturityDefinitions,
  codeAssetsDefinitions,
  visualAssetsDefinitions,
} from './definitions';
import type { ComponentChecklistData, ChecklistItem } from '../../components/ComponentChecklist';

// Import all checklist data
import accordionData from './accordion.json';
import additionalInfoData from './additional-info.json';
import addressBlockData from './address-block.json';
import alertData from './alert.json';
import autosaveData from './autosave.json';
import backToTopData from './back-to-top.json';
import bannerData from './banner.json';
import breadcrumbsData from './breadcrumbs.json';
import buttonData from './button.json';
import cardData from './card.json';
import checkboxData from './checkbox.json';
import comboBoxData from './combo-box.json';
import criticalActionData from './critical-action.json';
import dateInputData from './date-input.json';
import dividerData from './divider.json';
import fileInputData from './file-input.json';
import footerData from './footer.json';
import headerData from './header.json';
import iconData from './icon.json';
import labelData from './label.json';
import languageToggleData from './language-toggle.json';
import linkData from './link.json';
import listData from './list.json';
import loadingIndicatorData from './loading-indicator.json';
import memorableDateData from './memorable-date.json';
import modalData from './modal.json';
import needHelpData from './need-help.json';
import ombInfoData from './omb-info.json';
import onThisPageData from './on-this-page.json';
import paginationData from './pagination.json';
import penaltyNoticeData from './penalty-notice.json';
import prefillData from './prefill.json';
import privacyAgreementData from './privacy-agreement.json';
import processListData from './process-list.json';
import progressBarActivityData from './progress-bar-activity.json';
import progressBarSegmentedData from './progress-bar-segmented.json';
import radioButtonData from './radio-button.json';
import searchFilterData from './search-filter.json';
import searchInputData from './search-input.json';
import selectData from './select.json';
import serviceListItemData from './service-list-item.json';
import sidenavData from './sidenav.json';
import snackbarData from './snackbar.json';
import statementOfTruthData from './statement-of-truth.json';
import summaryBoxData from './summary-box.json';
import tableData from './table.json';
import tabsData from './tabs.json';
import tagData from './tag.json';
import telephoneData from './telephone.json';
import telephoneInputData from './telephone-input.json';
import textData from './text.json';
import textInputData from './text-input.json';
import textareaData from './textarea.json';

type RawChecklistItem = {
  name: string;
  webScore: boolean | 'n/a' | null;
  mobileScore: boolean | 'n/a' | null;
};

type RawChecklistData = {
  componentName: string;
  webCompleted: string | null;
  mobileCompleted: string | null;
  maturity: RawChecklistItem[];
  codeAssets: RawChecklistItem[];
  visualAssets: RawChecklistItem[];
  accessibility?: ComponentChecklistData['accessibility'];
};

/**
 * Enriches raw checklist items with descriptions from definitions
 */
function enrichItems(
  items: RawChecklistItem[],
  definitions: { name: string; description: string }[]
): ChecklistItem[] {
  return items.map((item) => {
    const definition = definitions.find(
      (d) => d.name.toLowerCase() === item.name.toLowerCase()
    );
    return {
      name: item.name,
      description: definition?.description || '',
      webScore: item.webScore,
      mobileScore: item.mobileScore,
    };
  });
}

/**
 * Transforms raw JSON data into full ComponentChecklistData with descriptions
 */
function transformChecklistData(raw: RawChecklistData): ComponentChecklistData {
  return {
    componentName: raw.componentName,
    webCompleted: raw.webCompleted,
    mobileCompleted: raw.mobileCompleted,
    maturity: enrichItems(raw.maturity, maturityDefinitions),
    codeAssets: enrichItems(raw.codeAssets, codeAssetsDefinitions),
    visualAssets: enrichItems(raw.visualAssets, visualAssetsDefinitions),
    accessibility: raw.accessibility,
  };
}

// Export transformed checklist data
export const checklistData: Record<string, ComponentChecklistData> = {
  // Main components
  accordion: transformChecklistData(accordionData as RawChecklistData),
  'additional-info': transformChecklistData(additionalInfoData as RawChecklistData),
  'address-block': transformChecklistData(addressBlockData as RawChecklistData),
  alert: transformChecklistData(alertData as RawChecklistData),
  'back-to-top': transformChecklistData(backToTopData as RawChecklistData),
  banner: transformChecklistData(bannerData as RawChecklistData),
  breadcrumbs: transformChecklistData(breadcrumbsData as RawChecklistData),
  button: transformChecklistData(buttonData as RawChecklistData),
  card: transformChecklistData(cardData as RawChecklistData),
  'critical-action': transformChecklistData(criticalActionData as RawChecklistData),
  divider: transformChecklistData(dividerData as RawChecklistData),
  footer: transformChecklistData(footerData as RawChecklistData),
  header: transformChecklistData(headerData as RawChecklistData),
  icon: transformChecklistData(iconData as RawChecklistData),
  'language-toggle': transformChecklistData(languageToggleData as RawChecklistData),
  link: transformChecklistData(linkData as RawChecklistData),
  list: transformChecklistData(listData as RawChecklistData),
  'loading-indicator': transformChecklistData(loadingIndicatorData as RawChecklistData),
  modal: transformChecklistData(modalData as RawChecklistData),
  'omb-info': transformChecklistData(ombInfoData as RawChecklistData),
  'on-this-page': transformChecklistData(onThisPageData as RawChecklistData),
  pagination: transformChecklistData(paginationData as RawChecklistData),
  'process-list': transformChecklistData(processListData as RawChecklistData),
  'search-filter': transformChecklistData(searchFilterData as RawChecklistData),
  'search-input': transformChecklistData(searchInputData as RawChecklistData),
  'service-list-item': transformChecklistData(serviceListItemData as RawChecklistData),
  sidenav: transformChecklistData(sidenavData as RawChecklistData),
  snackbar: transformChecklistData(snackbarData as RawChecklistData),
  'summary-box': transformChecklistData(summaryBoxData as RawChecklistData),
  table: transformChecklistData(tableData as RawChecklistData),
  tabs: transformChecklistData(tabsData as RawChecklistData),
  tag: transformChecklistData(tagData as RawChecklistData),
  telephone: transformChecklistData(telephoneData as RawChecklistData),
  text: transformChecklistData(textData as RawChecklistData),

  // Form sub-components
  autosave: transformChecklistData(autosaveData as RawChecklistData),
  checkbox: transformChecklistData(checkboxData as RawChecklistData),
  'combo-box': transformChecklistData(comboBoxData as RawChecklistData),
  'date-input': transformChecklistData(dateInputData as RawChecklistData),
  'file-input': transformChecklistData(fileInputData as RawChecklistData),
  label: transformChecklistData(labelData as RawChecklistData),
  'memorable-date': transformChecklistData(memorableDateData as RawChecklistData),
  'need-help': transformChecklistData(needHelpData as RawChecklistData),
  'penalty-notice': transformChecklistData(penaltyNoticeData as RawChecklistData),
  prefill: transformChecklistData(prefillData as RawChecklistData),
  'privacy-agreement': transformChecklistData(privacyAgreementData as RawChecklistData),
  'progress-bar-activity': transformChecklistData(progressBarActivityData as RawChecklistData),
  'progress-bar-segmented': transformChecklistData(progressBarSegmentedData as RawChecklistData),
  'radio-button': transformChecklistData(radioButtonData as RawChecklistData),
  select: transformChecklistData(selectData as RawChecklistData),
  'statement-of-truth': transformChecklistData(statementOfTruthData as RawChecklistData),
  'telephone-input': transformChecklistData(telephoneInputData as RawChecklistData),
  'text-input': transformChecklistData(textInputData as RawChecklistData),
  textarea: transformChecklistData(textareaData as RawChecklistData),
};

/**
 * Get checklist data for a component by name
 */
export function getChecklistData(componentName: string): ComponentChecklistData | null {
  const key = componentName.toLowerCase().replace(/\s+/g, '-');
  return checklistData[key] || null;
}

export default checklistData;
