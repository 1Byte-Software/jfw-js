// Define an object to represent different types of brand's links.
export enum BRAND_LINK_TYPE {
    BODY = 'Body',
    BODY_FOOTER = 'BodyFooter',
    BODY_HEADER_SLIDER = 'BodyHeaderSlider',
    BODY_NAVIGATION = 'BodyNavigation',
    CHECKOUT_LINK = 'CheckoutLink',
    FOOTER = 'Footer',
    FOOTER_COPYRIGHT = 'FooterCopyRight',
    FOOTER_DESCRIPTION = 'FooterDescription',
    FOOTER_LOGO = 'FooterLogo',
    FOOTER_WIDGET = 'FooterWidget',
    HEADER = 'Header',
    HEADER_AVATAR = 'HeaderAvatar',
    HEADER_CUSTOM_LOGO = 'HeaderCustomLogo',
    HEADER_MENU = 'HeaderMenu',
    HEADER_SEARCH = 'HeaderSearch',
    HEADER_SLIDER = 'HeaderSlider',
    KNOWLEDGE = 'Knowledge',
    NAVIGATION = 'Navigation',
    NAVIGATION_COPYRIGHT = 'NavigationCopyRight',
    NAVIGATION_MENU = 'NavigationMenu',
    NAVIGATION_SEARCH = 'NavigationSearch',
    REFERENCE = 'ReferenceLink',
    SLIDER = 'Slider',
    UNKNOWN = 'Unknown',
}

/*
 *Define an object to represent various brand identity links.
 *Utilize this object for querying the links.
 */
export const BRAND_LINK_IDENTIFIER = {
    checkoutLink: 'CheckoutLink',
};
