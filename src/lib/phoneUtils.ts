import { parsePhoneNumber, isValidPhoneNumber, getCountries, getCountryCallingCode, type CountryCode } from "libphonenumber-js";

export interface PhoneLocationResult {
  isValid: boolean;
  formatted: string;
  country: string;
  countryCode: string;
  countryFlag: string;
  dialCode: string;
  numberType: string;
  region: string;
  timezone: string[];
  nationalNumber: string;
  internationalFormat: string;
  possibleLocations: string[];
  carrier?: string;
}

const countryTimezones: Record<string, string[]> = {
  US: ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles"],
  GB: ["Europe/London"],
  IN: ["Asia/Kolkata"],
  AU: ["Australia/Sydney", "Australia/Melbourne", "Australia/Perth"],
  CA: ["America/Toronto", "America/Vancouver", "America/Winnipeg"],
  DE: ["Europe/Berlin"],
  FR: ["Europe/Paris"],
  JP: ["Asia/Tokyo"],
  CN: ["Asia/Shanghai"],
  RU: ["Europe/Moscow", "Asia/Yekaterinburg", "Asia/Novosibirsk"],
  BR: ["America/Sao_Paulo", "America/Manaus"],
  MX: ["America/Mexico_City", "America/Tijuana"],
  ZA: ["Africa/Johannesburg"],
  NG: ["Africa/Lagos"],
  EG: ["Africa/Cairo"],
  PK: ["Asia/Karachi"],
  BD: ["Asia/Dhaka"],
  ID: ["Asia/Jakarta", "Asia/Makassar"],
  PH: ["Asia/Manila"],
  IT: ["Europe/Rome"],
  ES: ["Europe/Madrid"],
  AR: ["America/Argentina/Buenos_Aires"],
  KR: ["Asia/Seoul"],
  SA: ["Asia/Riyadh"],
  TR: ["Europe/Istanbul"],
  NL: ["Europe/Amsterdam"],
  SE: ["Europe/Stockholm"],
  NO: ["Europe/Oslo"],
  DK: ["Europe/Copenhagen"],
  FI: ["Europe/Helsinki"],
  PL: ["Europe/Warsaw"],
  UA: ["Europe/Kiev"],
  TH: ["Asia/Bangkok"],
  MY: ["Asia/Kuala_Lumpur"],
  SG: ["Asia/Singapore"],
  NZ: ["Pacific/Auckland"],
  AE: ["Asia/Dubai"],
  IL: ["Asia/Jerusalem"],
  GR: ["Europe/Athens"],
  PT: ["Europe/Lisbon"],
  CH: ["Europe/Zurich"],
  AT: ["Europe/Vienna"],
  BE: ["Europe/Brussels"],
  CZ: ["Europe/Prague"],
  HU: ["Europe/Budapest"],
  RO: ["Europe/Bucharest"],
};

const countryRegions: Record<string, string> = {
  US: "North America",
  CA: "North America",
  MX: "North America",
  GB: "Western Europe",
  DE: "Western Europe",
  FR: "Western Europe",
  IT: "Western Europe",
  ES: "Western Europe",
  NL: "Western Europe",
  BE: "Western Europe",
  CH: "Western Europe",
  AT: "Western Europe",
  PT: "Western Europe",
  SE: "Northern Europe",
  NO: "Northern Europe",
  DK: "Northern Europe",
  FI: "Northern Europe",
  PL: "Eastern Europe",
  CZ: "Eastern Europe",
  HU: "Eastern Europe",
  RO: "Eastern Europe",
  UA: "Eastern Europe",
  RU: "Eastern Europe / Northern Asia",
  IN: "South Asia",
  PK: "South Asia",
  BD: "South Asia",
  CN: "East Asia",
  JP: "East Asia",
  KR: "East Asia",
  TH: "Southeast Asia",
  MY: "Southeast Asia",
  SG: "Southeast Asia",
  ID: "Southeast Asia",
  PH: "Southeast Asia",
  AU: "Oceania",
  NZ: "Oceania",
  BR: "South America",
  AR: "South America",
  ZA: "Sub-Saharan Africa",
  NG: "Sub-Saharan Africa",
  EG: "North Africa / Middle East",
  SA: "Middle East",
  AE: "Middle East",
  TR: "Middle East / Europe",
  IL: "Middle East",
  GR: "Southern Europe",
};

const countryNames: Record<string, string> = {
  US: "United States", GB: "United Kingdom", IN: "India", AU: "Australia",
  CA: "Canada", DE: "Germany", FR: "France", JP: "Japan", CN: "China",
  RU: "Russia", BR: "Brazil", MX: "Mexico", ZA: "South Africa", NG: "Nigeria",
  EG: "Egypt", PK: "Pakistan", BD: "Bangladesh", ID: "Indonesia", PH: "Philippines",
  IT: "Italy", ES: "Spain", AR: "Argentina", KR: "South Korea", SA: "Saudi Arabia",
  TR: "Turkey", NL: "Netherlands", SE: "Sweden", NO: "Norway", DK: "Denmark",
  FI: "Finland", PL: "Poland", UA: "Ukraine", TH: "Thailand", MY: "Malaysia",
  SG: "Singapore", NZ: "New Zealand", AE: "United Arab Emirates", IL: "Israel",
  GR: "Greece", PT: "Portugal", CH: "Switzerland", AT: "Austria", BE: "Belgium",
  CZ: "Czech Republic", HU: "Hungary", RO: "Romania",
};

function getCountryFlag(countryCode: string): string {
  const codePoints = [...countryCode.toUpperCase()].map(
    (char) => 127397 + char.charCodeAt(0)
  );
  return String.fromCodePoint(...codePoints);
}

function getNumberType(type: string | undefined): string {
  const types: Record<string, string> = {
    MOBILE: "📱 Mobile",
    FIXED_LINE: "☎️ Fixed Line",
    FIXED_LINE_OR_MOBILE: "📞 Fixed/Mobile",
    TOLL_FREE: "🆓 Toll-Free",
    PREMIUM_RATE: "💎 Premium Rate",
    SHARED_COST: "💰 Shared Cost",
    VOIP: "🌐 VoIP",
    PERSONAL_NUMBER: "👤 Personal",
    PAGER: "📟 Pager",
    UAN: "🏢 UAN",
    VOICEMAIL: "📬 Voicemail",
    UNKNOWN: "❓ Unknown",
  };
  return types[type || "UNKNOWN"] || "❓ Unknown";
}

export function lookupPhoneLocation(phoneNumber: string): PhoneLocationResult {
  try {
    const parsed = parsePhoneNumber(phoneNumber);
    if (!parsed) throw new Error("Invalid");

    const countryCode = parsed.country || "US";
    const timezones = countryTimezones[countryCode] || ["Unknown"];
    const region = countryRegions[countryCode] || "Unknown Region";
    const country = countryNames[countryCode] || countryCode;

    return {
      isValid: parsed.isValid(),
      formatted: parsed.formatInternational(),
      country,
      countryCode,
      countryFlag: getCountryFlag(countryCode),
      dialCode: `+${parsed.countryCallingCode}`,
      numberType: getNumberType(parsed.getType()),
      region,
      timezone: timezones,
      nationalNumber: parsed.nationalNumber,
      internationalFormat: parsed.formatInternational(),
      possibleLocations: [country, region],
    };
  } catch {
    return {
      isValid: false,
      formatted: "",
      country: "Unknown",
      countryCode: "",
      countryFlag: "🌍",
      dialCode: "",
      numberType: "Unknown",
      region: "Unknown",
      timezone: [],
      nationalNumber: "",
      internationalFormat: "",
      possibleLocations: [],
    };
  }
}
