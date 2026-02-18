import { useState } from "react";
import { MapPin, Phone, Globe, Clock, Wifi, Search, X, ChevronRight } from "lucide-react";
import { lookupPhoneLocation, type PhoneLocationResult } from "@/lib/phoneUtils";
import mapBg from "@/assets/map-bg.jpg";

const InfoCard = ({
  icon,
  label,
  value,
  mono = false,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  mono?: boolean;
  delay?: number;
}) => (
  <div
    className="rounded-xl border border-primary/20 bg-card p-4 flex items-start gap-3 animate-reveal"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
      <p className={`text-sm font-semibold text-foreground truncate ${mono ? "font-mono" : ""}`}>
        {value}
      </p>
    </div>
  </div>
);

export default function PhoneLocator() {
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState<PhoneLocationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!phone.trim()) return;
    setLoading(true);
    setSearched(false);
    setTimeout(() => {
      const data = lookupPhoneLocation(phone.trim());
      setResult(data);
      setLoading(false);
      setSearched(true);
    }, 800);
  };

  const handleClear = () => {
    setPhone("");
    setResult(null);
    setSearched(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const examples = ["+1 650 555 0123", "+44 20 7946 0000", "+91 98765 43210", "+49 30 12345678"];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={mapBg} alt="World Map" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Decorative glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-4 py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex animate-float items-center justify-center">
            <div className="relative flex h-16 w-16 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary/20 animate-pulse-ring" />
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary/10 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-card shadow-glow">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
            </div>
          </div>

          <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-glow text-primary">Phone</span>
            <span className="text-foreground"> Locator</span>
          </h1>
          <p className="mx-auto max-w-md text-muted-foreground">
            Enter any phone number to instantly discover its country, region, timezone, and more.
          </p>
        </div>

        {/* Search Box */}
        <div className="w-full max-w-xl">
          <div className="relative flex overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-glow-sm">
            <div className="flex items-center pl-4 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="+1 234 567 8900"
              className="flex-1 bg-transparent px-3 py-4 font-mono text-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
            {phone && (
              <button
                onClick={handleClear}
                className="flex items-center px-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={handleSearch}
              disabled={!phone.trim() || loading}
              className="flex items-center gap-2 rounded-r-2xl bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  <span className="hidden sm:inline">Locate</span>
                </>
              )}
            </button>
          </div>

          {/* Example numbers */}
          {!searched && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground mr-1 mt-1">Try:</span>
              {examples.map((ex) => (
                <button
                  key={ex}
                  onClick={() => setPhone(ex)}
                  className="rounded-lg border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                >
                  {ex}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="relative h-20 w-20">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 bg-card shadow-glow">
                <MapPin className="h-8 w-8 animate-pulse text-primary" />
              </div>
            </div>
            <p className="font-mono text-sm text-primary animate-pulse">Scanning number...</p>
          </div>
        )}

        {/* Results */}
        {searched && result && !loading && (
          <div className="mt-8 w-full max-w-2xl animate-reveal">
            {result.isValid ? (
              <>
                {/* Main result card */}
                <div className="mb-4 overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-glow">
                  <div className="shimmer h-0.5 w-full" />
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <span className="text-6xl">{result.countryFlag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary border border-primary/20">
                            {result.dialCode}
                          </span>
                          <span className="rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                            {result.countryCode}
                          </span>
                        </div>
                        <h2 className="mt-1 text-2xl font-bold text-foreground">{result.country}</h2>
                        <p className="text-sm text-muted-foreground">{result.region}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          Valid
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 rounded-xl border border-border bg-secondary/50 p-3">
                      <p className="font-mono text-center text-lg text-primary tracking-widest">
                        {result.internationalFormat}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detail cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <InfoCard
                    icon={<Globe className="h-4 w-4" />}
                    label="Region"
                    value={result.region}
                    delay={50}
                  />
                  <InfoCard
                    icon={<Wifi className="h-4 w-4" />}
                    label="Number Type"
                    value={result.numberType}
                    delay={100}
                  />
                  <InfoCard
                    icon={<Clock className="h-4 w-4" />}
                    label="Primary Timezone"
                    value={result.timezone[0] || "Unknown"}
                    mono
                    delay={150}
                  />
                  <InfoCard
                    icon={<Phone className="h-4 w-4" />}
                    label="National Number"
                    value={result.nationalNumber}
                    mono
                    delay={200}
                  />
                  {result.timezone.length > 1 && (
                    <div
                      className="sm:col-span-2 rounded-xl border border-primary/20 bg-card p-4 animate-reveal"
                      style={{ animationDelay: "250ms" }}
                    >
                      <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        All Timezones
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {result.timezone.map((tz) => (
                          <span
                            key={tz}
                            className="rounded-lg border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
                          >
                            {tz}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Disclaimer */}
                <p className="mt-4 text-center text-xs text-muted-foreground/60">
                  Location is based on number prefix, not real-time GPS tracking.
                </p>
              </>
            ) : (
              <div className="rounded-2xl border border-destructive/30 bg-card p-8 text-center">
                <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full border border-destructive/30 bg-destructive/10">
                  <Phone className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Invalid Number</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Could not recognize "{phone}". Try including the country code (e.g., +1, +44, +91).
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="text-xs text-muted-foreground">Examples:</span>
                  {["+1 650 555 0123", "+44 20 7946 0000", "+91 98765 43210"].map((ex) => (
                    <button
                      key={ex}
                      onClick={() => { setPhone(ex); setSearched(false); }}
                      className="rounded-lg border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Features row */}
        {!searched && !loading && (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
            {[
              { icon: <Globe className="h-5 w-5" />, title: "Country Detection", desc: "Identify country from any number format" },
              { icon: <Clock className="h-5 w-5" />, title: "Timezone Info", desc: "Get local timezone for any region" },
              { icon: <Wifi className="h-5 w-5" />, title: "Number Type", desc: "Detect mobile, landline, VoIP & more" },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card/50 p-4 text-center"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {f.icon}
                </div>
                <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
