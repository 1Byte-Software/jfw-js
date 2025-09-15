export enum BrandLinkType {
    Unknown = 'Unknown',

    Header = 'Header',
    HeaderMenu = 'HeaderMenu',
    HeaderSlider = 'HeaderSlider',
    HeaderSearch = 'HeaderSearch',
    HeaderAvatar = 'HeaderAvatar',
    HeaderCustomLogo = 'HeaderCustomLogo',

    Footer = 'Footer',
    FooterWidget = 'FooterWidget',
    FooterLogo = 'FooterLogo',
    FooterDescription = 'FooterDescription',
    FooterCopyRight = 'FooterCopyRight',
    FooterPrivacyPolicy = 'FooterPrivacyPolicy',
    FooterTermsOfUse = 'FooterTermsOfUse',
    FooterChangeLogs = 'FooterChangeLogs',

    Navigation = 'Navigation',
    NavigationMenu = 'NavigationMenu',
    NavigationSearch = 'NavigationSearch',
    NavigationCopyRight = 'NavigationCopyRight',

    Slider = 'Slider',
    Body = 'Body',
    BodyNavigation = 'BodyNavigation',
    BodyHeaderSlider = 'BodyHeaderSlider',
    BodyFooter = 'BodyFooter',

    ReferenceLink = 'ReferenceLink',
}

export enum BrandLinkStatus {
    Inactive = 'Inactive',
    Active = 'Active',
}

/**
 * This parameters used to create a link in brand link menu item
 */
export enum BrandLinkMenuItemPlaceholderParams {
    AuthKey = 'auth_key',
    Id = 'id',
    Username = 'username',
    EmailAddress = 'email_address',
}
