import { BRAND_URL as DOMAIN } from "@/models/constants";

export const BRAND_URL = localStorage.getItem(DOMAIN) as string;
