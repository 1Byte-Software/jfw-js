import { BRAND_URL, MODE, MODE_VALUES } from "@/models/constants";
import { JfwConfig } from "@/models/interfaces";

export const authClient = (config: JfwConfig) => {
    const { brandUrl, mode } = config;

    const host = window.location.host;
    const currentMode =
        mode === MODE_VALUES.development ? MODE_VALUES.development : MODE_VALUES.production;
    const currentDomain = host.includes(" localhost") ? brandUrl : host;

    const start = () => {
        localStorage.setItem(MODE, JSON.stringify(currentMode));

        if (!currentDomain) {
            throw new Error("Domain is required");
        } else {
            localStorage.setItem(BRAND_URL, JSON.stringify(currentDomain));
        }
    };

    return {
        start,
    };
};
