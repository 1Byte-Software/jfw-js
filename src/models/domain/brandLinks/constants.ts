/**
 * Possible values:
 * - `0` - `Unknown`
 * ### Header
 * - `1` - `Header`
 * - `2` - `HeaderMenu`
 * - `3` - `HeaderSlider`
 * - `4` - `HeaderSearch`
 * - `5` - `HeaderAvatar`
 * - `6` - `HeaderCustomLogo`
 *
 * ### Footer
 * - `10` - `Footer`
 * - `11` - `FooterWidget`
 * - `12` - `FooterLogo`
 * - `13` - `FooterDescription`
 * - `14` - `FooterCopyRight`
 * - `15` - `FooterPrivacyPolicy`
 * - `16` - `FooterTermsOfUse`
 * - `17` - `FooterChangeLogs`
 *
 * ### Navigation
 * - `20` - `Navigation`
 * - `21` - `NavigationMenu`
 * - `23` - `NavigationSearch`
 * - `24` - `NavigationCopyRight`
 *
 * ### Body
 * - `30` - `Slider`
 * - `40` - `Body`
 * - `41` - `BodyNavigation`
 * - `42` - `BodyHeaderSlider`
 * - `43` - `BodyFooter`
 *
 * ### Reference
 * - `50` - `ReferenceLink`
 */
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

/**
 * Possible values:
 * - `0` - `Inactive`
 * - `1` - `Active`
 */
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
