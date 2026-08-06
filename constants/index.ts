export { aboutContent } from "./about";
export type {
  AboutBreadcrumb,
  FacilityItem,
  StatItem,
  StoryMilestone,
  TrustItem,
  ValueItem,
  VisionMissionItem,
} from "./about";
export {
  articleCategories,
  articles,
  articlesContent,
  createArticleMetadata,
  formatArticleDate,
  getArticleBySlug,
  getArticleToc,
  getRelatedArticles,
} from "./articles";
export type {
  Article,
  ArticleBreadcrumb,
  ArticleCategory,
  ArticleCategoryId,
  ArticleContentBlock,
  ArticleSummary,
  PaginationItem,
  TocItem,
} from "./articles";
export { CONTACT, contactContent, getWhatsAppUrl } from "./contact";
export type {
  ContactActionType,
  ContactBreadcrumb,
  ContactCard,
  ContactFaqItem,
  ContactIconKey,
  ContactSocialCard,
} from "./contact";
export { galleryContent } from "./gallery";
export type {
  EnvironmentFeature,
  FacilityHighlight,
  GalleryBreadcrumb,
  GalleryCategory,
  GalleryCategoryId,
  GalleryItem as GalleryPageItem,
  GalleryStat,
} from "./gallery";
export { homepageContent } from "./homepage";
export type {
  ArticlePreview,
  FeatureItem,
  GalleryItem,
  OpeningHour,
  ServicePreview,
  TestimonialItem,
} from "./homepage";
export { footerNavigation, mainNavigation } from "./navigation";
export type { NavItem } from "./navigation";
export { servicesContent } from "./services";
export type {
  BreadcrumbItem,
  FaqItem,
  ProcessStep,
  ServiceAdvantage,
  ServiceIconKey,
  ServiceItem,
} from "./services";
export { teamContent } from "./team";
export type {
  ExpertiseArea,
  QualificationItem,
  TeamBreadcrumb,
  TeamDoctor,
  TeamTrustItem,
} from "./team";
export { SITE_DESCRIPTION, SITE_LOCALE, SITE_NAME, SITE_URL } from "./site";
export { socialLinks } from "./social";
export type { SocialLink } from "./social";
export { spacing } from "./spacing";
export type {
  CardSpacing,
  ComponentSpacing,
  SectionSpacing,
  TextSpacing,
} from "./spacing";
export { transition } from "./transition";
export type { TransitionToken } from "./transition";
export { zIndex } from "./z-index";
export type { ZIndexToken } from "./z-index";
