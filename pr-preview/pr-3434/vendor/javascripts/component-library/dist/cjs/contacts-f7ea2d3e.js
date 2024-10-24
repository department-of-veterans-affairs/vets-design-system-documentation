'use strict';

const i18next = require('./i18next-1fd09d7c.js');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

// eslint-disable-next-line no-control-regex
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

var serializeCookie = function serializeCookie(name, val, options) {
  var opt = options || {};
  opt.path = opt.path || '/';
  var value = encodeURIComponent(val);
  var str = name + '=' + value;

  if (opt.maxAge > 0) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) str += '; HttpOnly';
  if (opt.secure) str += '; Secure';

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;

      case 'lax':
        str += '; SameSite=Lax';
        break;

      case 'strict':
        str += '; SameSite=Strict';
        break;

      case 'none':
        str += '; SameSite=None';
        break;

      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
};

var cookie = {
  create: function create(name, value, minutes, domain) {
    var cookieOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      path: '/',
      sameSite: 'strict'
    };

    if (minutes) {
      cookieOptions.expires = new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1000);
    }

    if (domain) cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
  },
  read: function read(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }

      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
  },
  remove: function remove(name) {
    this.create(name, '', -1);
  }
};
var cookie$1 = {
  name: 'cookie',
  lookup: function lookup(options) {
    var found;

    if (options.lookupCookie && typeof document !== 'undefined') {
      var c = cookie.read(options.lookupCookie);
      if (c) found = c;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupCookie && typeof document !== 'undefined') {
      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain, options.cookieOptions);
    }
  }
};

var querystring = {
  name: 'querystring',
  lookup: function lookup(options) {
    var found;

    if (typeof window !== 'undefined') {
      var search = window.location.search;

      if (!window.location.search && window.location.hash && window.location.hash.indexOf('?') > -1) {
        search = window.location.hash.substring(window.location.hash.indexOf('?'));
      }

      var query = search.substring(1);
      var params = query.split('&');

      for (var i = 0; i < params.length; i++) {
        var pos = params[i].indexOf('=');

        if (pos > 0) {
          var key = params[i].substring(0, pos);

          if (key === options.lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }

    return found;
  }
};

var hasLocalStorageSupport = null;

var localStorageAvailable = function localStorageAvailable() {
  if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;

  try {
    hasLocalStorageSupport = window !== 'undefined' && window.localStorage !== null;
    var testKey = 'i18next.translate.boo';
    window.localStorage.setItem(testKey, 'foo');
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }

  return hasLocalStorageSupport;
};

var localStorage = {
  name: 'localStorage',
  lookup: function lookup(options) {
    var found;

    if (options.lookupLocalStorage && localStorageAvailable()) {
      var lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng) found = lng;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  }
};

var hasSessionStorageSupport = null;

var sessionStorageAvailable = function sessionStorageAvailable() {
  if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;

  try {
    hasSessionStorageSupport = window !== 'undefined' && window.sessionStorage !== null;
    var testKey = 'i18next.translate.boo';
    window.sessionStorage.setItem(testKey, 'foo');
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }

  return hasSessionStorageSupport;
};

var sessionStorage = {
  name: 'sessionStorage',
  lookup: function lookup(options) {
    var found;

    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      var lng = window.sessionStorage.getItem(options.lookupSessionStorage);
      if (lng) found = lng;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(options.lookupSessionStorage, lng);
    }
  }
};

var navigator$1 = {
  name: 'navigator',
  lookup: function lookup(options) {
    var found = [];

    if (typeof navigator !== 'undefined') {
      if (navigator.languages) {
        // chrome only; not an array, so can't use .push.apply instead of iterating
        for (var i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }

      if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
      }

      if (navigator.language) {
        found.push(navigator.language);
      }
    }

    return found.length > 0 ? found : undefined;
  }
};

var htmlTag = {
  name: 'htmlTag',
  lookup: function lookup(options) {
    var found;
    var htmlTag = options.htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);

    if (htmlTag && typeof htmlTag.getAttribute === 'function') {
      found = htmlTag.getAttribute('lang');
    }

    return found;
  }
};

var path = {
  name: 'path',
  lookup: function lookup(options) {
    var found;

    if (typeof window !== 'undefined') {
      var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);

      if (language instanceof Array) {
        if (typeof options.lookupFromPathIndex === 'number') {
          if (typeof language[options.lookupFromPathIndex] !== 'string') {
            return undefined;
          }

          found = language[options.lookupFromPathIndex].replace('/', '');
        } else {
          found = language[0].replace('/', '');
        }
      }
    }

    return found;
  }
};

var subdomain = {
  name: 'subdomain',
  lookup: function lookup(options) {
    var found;

    if (typeof window !== 'undefined') {
      var language = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);

      if (language instanceof Array) {
        if (typeof options.lookupFromSubdomainIndex === 'number') {
          found = language[options.lookupFromSubdomainIndex].replace('http://', '').replace('https://', '').replace('.', '');
        } else {
          found = language[0].replace('http://', '').replace('https://', '').replace('.', '');
        }
      }
    }

    return found;
  }
};

function getDefaults() {
  return {
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    // cache user language
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'] //cookieMinutes: 10,
    //cookieDomain: 'myDomain'

  };
}

var Browser = /*#__PURE__*/function () {
  function Browser(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Browser);

    this.type = 'languageDetector';
    this.detectors = {};
    this.init(services, options);
  }

  _createClass(Browser, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services;
      this.options = defaults(options, this.options || {}, getDefaults()); // backwards compatibility

      if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      this.i18nOptions = i18nOptions;
      this.addDetector(cookie$1);
      this.addDetector(querystring);
      this.addDetector(localStorage);
      this.addDetector(sessionStorage);
      this.addDetector(navigator$1);
      this.addDetector(htmlTag);
      this.addDetector(path);
      this.addDetector(subdomain);
    }
  }, {
    key: "addDetector",
    value: function addDetector(detector) {
      this.detectors[detector.name] = detector;
    }
  }, {
    key: "detect",
    value: function detect(detectionOrder) {
      var _this = this;

      if (!detectionOrder) detectionOrder = this.options.order;
      var detected = [];
      detectionOrder.forEach(function (detectorName) {
        if (_this.detectors[detectorName]) {
          var lookup = _this.detectors[detectorName].lookup(_this.options);

          if (lookup && typeof lookup === 'string') lookup = [lookup];
          if (lookup) detected = detected.concat(lookup);
        }
      });
      if (this.services.languageUtils.getBestMatchFromCodes) return detected; // new i18next v19.5.0

      return detected.length > 0 ? detected[0] : null; // a little backward compatibility
    }
  }, {
    key: "cacheUserLanguage",
    value: function cacheUserLanguage(lng, caches) {
      var _this2 = this;

      if (!caches) caches = this.options.caches;
      if (!caches) return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
      caches.forEach(function (cacheName) {
        if (_this2.detectors[cacheName]) _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
      });
    }
  }]);

  return Browser;
}();

Browser.type = 'languageDetector';

const mainTag = {
  name: 'mainTag',

  lookup(options) {
    const mainTag = document.querySelector('main');

    return mainTag?.getAttribute('lang');
  },
};

const enTranslation = {
  'error': 'Error',
  'required': '(*Required)',
  'select': '- Select -',
  'max-chars': '(Max. {{length}} characters)',
  'min-chars': '(Min. {{length}} characters)',
  'date-of-birth': 'Date of birth',
  'month': 'Month',
  'day': 'Day',
  'year': 'Year',
  'month-select': 'Please select a month',
  'month-range': 'Please enter a month between {{start}} and {{end}}',
  'day-range': 'Please enter a day between {{start}} and {{end}}',
  'year-range': 'Please enter a year between {{start}} and {{end}}',
  'expand-all': 'Expand all',
  'collapse-all': 'Collapse all',
  'expand-all-aria-label': 'Expand all accordions',
  'collapse-all-aria-label': 'Collapse all accordions',
  'january': 'January',
  'february': 'February',
  'march': 'March',
  'april': 'April',
  'may': 'May',
  'june': 'June',
  'july': 'July',
  'august': 'August',
  'september': 'September',
  'october': 'October',
  'november': 'November',
  'december': 'December',
  'on-this-page': 'On this page',
  'date-hint': 'Enter 2 digits for the month and day and 4 digits for the year',
  'date-hint-with-select': 'For example: January 19 2000',
  'date-error': 'Please enter a complete date',
  'number-error': 'Please enter a valid number',
  'gov-site-label': 'Official website of the United States government',
  'gov-site-button': "Here's how you know",
  'gov-site-website': 'Official websites use .{{tld}}',
  'gov-site-explanation': 'A .{{tld}} website belongs to an official government organization in the United States.',
  'gov-site-https': 'Secure .{{tld}} websites use HTTPS',
  'gov-site-lock': "A lock {{image}} or https:// means you've safely connected to the .{{tld}} website. Share sensitive information only on official, secure websites.",
  'next': 'Next',
  'previous': 'Previous'
};

const esTranslation = {
  'error': 'Error',
  'required': '(*Requerido)',
  'select': '- Seleccione -',
  'max-chars': '(Número máximo de caracteres: {{length}})',
  'min-chars': '(Número mínimo de caracteres: {{length}})',
  'date-of-birth': 'Fecha de nacimiento',
  'month': 'Mes',
  'day': 'Día',
  'year': 'Año',
  'month-range': 'Ingrese un mes entre {{start}} y {{end}}',
  'day-range': 'Ingrese un día entre {{start}} y {{end}}',
  'year-range': 'Ingrese un año entre {{start}} y {{end}}',
  'expand-all': 'Expandir todo',
  'collapse-all': 'Contraer todo',
  'expand-all-aria-label': 'Expandir todos los acordeones',
  'collapse-all-aria-label': 'Contraer todos los acordeones',
  'january': 'Enero',
  'february': 'Febrero',
  'march': 'Marzo',
  'april': 'Abril',
  'may': 'Mayo',
  'june': 'Junio',
  'july': 'Julio',
  'august': 'Agosto',
  'september': 'Septiembre',
  'october': 'Octubre',
  'november': 'Noviembre',
  'december': 'Diciembre',
  'on-this-page': 'En esta página',
  'date-hint': 'Ingrese 2 dígitos para el mes y el día y 4 dígitos para el año',
  'date-hint-with-select': 'Por ejemplo: Enero 19 2000',
  'date-error': 'Ingrese una fecha completa',
  'gov-site-label': 'Un sitio oficial del Gobierno de Estados Unidos',
  'gov-site-button': 'Así es como usted puede verificarlo',
  'gov-site-website': 'Los sitios web oficiales usan .{{tld}}',
  'gov-site-explanation': 'Un sitio web .{{tld}} pertenece a una organización oficial del Gobierno de Estados Unidos.',
  'gov-site-https': 'Los sitios web seguros .{{tld}} usan HTTPS',
  'gov-site-lock': "Un candado {{image}} o https:// significa que usted se conectó de forma segura a un sitio web .{{tld}}. Comparta información sensible sólo en sitios web oficiales y seguros.",
  'next': 'Siguiente',
  'previous': 'Anterior'
};

const tlTranslation = {
  'error': 'Error',
  'required': '(*Kailangan)',
  'max-chars': '(Pinakamarami ang {{length}} karakter)',
  'min-chars': '(Pinakamababa ang {{length}} karakter)',
  'date-of-birth': 'Petsa ng Kapanganakan',
  'month': 'Buwan',
  'day': 'Araw',
  'year': 'Taon',
  'month-range': 'Mangyaring ilagay ang buwan sa pagitan ng {{start}} at {{end}}',
  'day-range': 'Mangyaring ilagay ang araw sa pagitan ng {{start}} at {{end}}',
  'year-range': 'Mangyaring ilagay ang taon sa pagitan ng {{start}} at {{end}}',
  'expand-all': 'I-expand lahat',
  'collapse-all': 'I-collapse ang lahat',
  'expand-all-aria-label': 'I-expand ang lahat ng accordion',
  'collapse-all-aria-label': 'I-collapse ang lahat ng accordion',
  'on-this-page': 'Sa pahinang ito',
  'date-hint': 'Mangyaring magpasok ng 2 numero para sa buwan at araw at 4 na numero para sa taon',
  'date-error': 'Mangyaring maglagay ng kumpletong petsa',
};

const languageDetector = new Browser();
languageDetector.addDetector(mainTag);
i18next.instance.use(languageDetector).init({
  fallbackLng: 'en',
  detection: {
    order: ['mainTag', 'htmlTag'],
  },
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
    tl: { translation: tlTranslation },
  },
});

window.addEventListener('load', event => {
  console.log('DOM fully loaded and parsed');

  const element = document.querySelector('main');

  if (element) {
    const langAttr = element.getAttribute('lang');
    if (langAttr) i18next.instance.changeLanguage(langAttr);
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'lang'
        ) {
          i18next.instance.changeLanguage(element.getAttribute('lang'));
        }
      });
    });

    observer.observe(element, {
      attributes: true,
    });
  }
});

/* eslint-disable i18next/no-literal-string */
// @ts-ignore
/**
 * Map of phone numbers to descriptions. This is only intended for documentation
 * purposes. Use CONTACTS.<key> to get the actual phone number.
 */
const contactsMap = Object.freeze({
    '222_VETS': { phoneNumber: '8772228387', description: 'VA Help Line' },
    '4AID_VET': {
        phoneNumber: '8774243838',
        description: 'National Call Center for Homeless Veterans',
    },
    711: { phoneNumber: '711', description: 'Telecommunications Relay Service' },
    911: { phoneNumber: '911', description: '911' },
    CAREGIVER: {
        phoneNumber: '8552603274',
        description: 'VA National Caregiver Support Line',
    },
    CRISIS_LINE: {
        phoneNumber: '8002738255',
        description: 'Veterans Crisis hotline',
    },
    CRISIS_TTY: {
        phoneNumber: '8007994889',
        description: 'Veterans Crisis hotline TTY',
    },
    DMC: { phoneNumber: '8008270648', description: 'Debt Management Center' },
    DMC_OVERSEAS: {
        phoneNumber: '6127136415',
        description: 'Debt Management Center (Overseas)',
    },
    DMDC_DEERS: {
        phoneNumber: '8663632883',
        description: 'Defense Manpower Data Center (DMDC) | Defense Enrollment Eligibility Reporting System (DEERS) Support Office',
    },
    DS_LOGON: {
        phoneNumber: '8005389552',
        description: 'Defense Manpower Data Center',
    },
    DS_LOGON_TTY: {
        phoneNumber: '8663632883',
        description: 'Defense Manpower Data Center TTY',
    },
    FEDERAL_RELAY_SERVICE: {
        phoneNumber: '8008778339',
        description: 'Federal Relay Service',
    },
    GI_BILL: {
        phoneNumber: '8884424551',
        description: 'Education Call Center (1-888-GI-BILL-1)',
    },
    GO_DIRECT: {
        phoneNumber: '8003331795',
        description: 'Go Direct/Direct Express (Treasury)',
    },
    HELP_DESK: { phoneNumber: '8006982411', description: 'VA Help desk' },
    HEALTHCARE_ELIGIBILITY_CENTER: {
        phoneNumber: '8554888440',
        description: 'VA Healthcare Eligibility Center (Eligibility Division)',
    },
    HELP_TTY: { phoneNumber: '8008778339', description: 'VA Help Desk TTY' },
    MY_HEALTHEVET: {
        phoneNumber: '8773270022',
        description: 'My HealtheVet help desk',
    },
    NCA: {
        phoneNumber: '8005351117',
        description: 'National Cemetery Scheduling Office',
    },
    SUICIDE_PREVENTION_LIFELINE: {
        phoneNumber: '8007994889',
        description: 'Suicide Prevention Line',
    },
    TESC: {
        phoneNumber: '8882242950',
        description: 'U.S. Treasury Electronic Payment Solution Center',
    },
    TREASURY_DMS: {
        phoneNumber: '8888263127',
        description: 'U.S. Department of the Treasury (Debt Management Services)',
    },
    // VA_311 used before the number changed to include 411
    VA_311: { phoneNumber: '8006982411', description: 'VA Help desk (VA411)' },
    VA_411: { phoneNumber: '8006982411', description: 'VA Help desk (VA411)' },
    VA_BENEFITS: {
        phoneNumber: '8008271000',
        description: 'Veterans Benefits Assistance',
    },
});
/**
 * Map of phone numbers. CONTACTS.GI_BILL, for example, will return the phone
 * number defined in contactsMap.
 */
const CONTACTS = Object.freeze(Object.entries(contactsMap).reduce((allContacts, currentContact) => (Object.assign(Object.assign({}, allContacts), { [currentContact[0]]: currentContact[1].phoneNumber })), {}));

exports.CONTACTS = CONTACTS;
exports.contactsMap = contactsMap;
