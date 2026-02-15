import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (dismissed && Date.now() - parseInt(dismissed) < 7 * 24 * 60 * 60 * 1000) return;

    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    if (isStandalone) return;

    const ua = navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(ua);
    setIsIOS(ios);

    if (ios) {
      setShowBanner(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setShowBanner(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem("pwa-install-dismissed", Date.now().toString());
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="mx-auto max-w-md rounded-2xl border border-border/50 bg-card/95 backdrop-blur-xl p-4 shadow-2xl">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20">
            <Download className="h-5 w-5 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-foreground">Install Stay & Dine</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {isIOS
                ? "Tap the share button, then \"Add to Home Screen\""
                : "Add to your home screen for the best experience"}
            </p>
          </div>
          <button onClick={handleDismiss} className="shrink-0 text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>
        {!isIOS && (
          <Button onClick={handleInstall} variant="premium" size="sm" className="w-full mt-3">
            Install App
          </Button>
        )}
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
