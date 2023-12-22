// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Globals documents
 */
interface GlobalsDocumentData {
  /**
   * LinkedIn field in *Globals*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: globals.linkedInLink
   * - **Tab**: Social
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedInLink: prismic.LinkField /**
   * Email Address field in *Globals*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: globals.contactEmailAddress
   * - **Tab**: Contact
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  contactEmailAddress: prismic.KeyTextField;

  /**
   * Telephone Number field in *Globals*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: globals.contactNumber
   * - **Tab**: Contact
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contactNumber: prismic.KeyTextField;
}

/**
 * Globals document from Prismic
 *
 * - **API ID**: `globals`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GlobalsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<GlobalsDocumentData>,
    "globals",
    Lang
  >;

/**
 * Item in *[PAGE] Homepage → Projects*
 */
export interface HomepageDocumentDataProjectsItem {
  /**
   * Project field in *[PAGE] Homepage → Projects*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.projects[].project
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project: prismic.ContentRelationshipField<"project">;
}

/**
 * Item in *[PAGE] Homepage → Points*
 */
export interface HomepageDocumentDataAboutPointsItem {
  /**
   * Heading field in *[PAGE] Homepage → Points*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.aboutPoints[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Body field in *[PAGE] Homepage → Points*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.aboutPoints[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Content for [PAGE] Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *[PAGE] Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Core
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField /**
   * Meta Description field in *[PAGE] Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.metaDescription
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  metaDescription: prismic.KeyTextField;

  /**
   * Meta Image field in *[PAGE] Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.metaImage
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  metaImage: prismic.ImageField<never> /**
   * Intro field in *[PAGE] Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.intro
   * - **Tab**: Intro
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  intro: prismic.RichTextField /**
   * Projects field in *[PAGE] Homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.projects[]
   * - **Tab**: Projects
   * - **Documentation**: https://prismic.io/docs/field#group
   */;
  projects: prismic.GroupField<Simplify<HomepageDocumentDataProjectsItem>> /**
   * Heading field in *[PAGE] Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.aboutHeading
   * - **Tab**: About
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  aboutHeading: prismic.KeyTextField;

  /**
   * Intro field in *[PAGE] Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.aboutIntro
   * - **Tab**: About
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  aboutIntro: prismic.RichTextField;

  /**
   * Image field in *[PAGE] Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.aboutImage
   * - **Tab**: About
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  aboutImage: prismic.ImageField<"SmallScreen">;

  /**
   * Points field in *[PAGE] Homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.aboutPoints[]
   * - **Tab**: About
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  aboutPoints: prismic.GroupField<
    Simplify<HomepageDocumentDataAboutPointsItem>
  >;

  /**
   * CTA Label field in *[PAGE] Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.aboutCtaLabel
   * - **Tab**: About
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  aboutCtaLabel: prismic.KeyTextField;

  /**
   * CTA Link field in *[PAGE] Homepage*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.aboutCtaLink
   * - **Tab**: About
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  aboutCtaLink: prismic.LinkField;
}

/**
 * [PAGE] Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Content for [PAGE] Legal Page documents
 */
interface LegalPageDocumentData {
  /**
   * Title field in *[PAGE] Legal Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: legalPage.title
   * - **Tab**: Core
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField /**
   * Meta Description field in *[PAGE] Legal Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: legalPage.metaDescription
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  metaDescription: prismic.KeyTextField;

  /**
   * Meta Image field in *[PAGE] Legal Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: legalPage.metaImage
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  metaImage: prismic.ImageField<never> /**
   * Body field in *[PAGE] Legal Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: legalPage.body
   * - **Tab**: Body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  body: prismic.RichTextField;
}

/**
 * [PAGE] Legal Page document from Prismic
 *
 * - **API ID**: `legalPage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LegalPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<LegalPageDocumentData>,
    "legalPage",
    Lang
  >;

/**
 * Item in *[PAGE] Project → Credits*
 */
export interface ProjectDocumentDataCreditsItem {
  /**
   * Heading field in *[PAGE] Project → Credits*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.credits[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Credit field in *[PAGE] Project → Credits*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.credits[].credit
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  credit: prismic.KeyTextField;
}

/**
 * Item in *[PAGE] Project → Tech*
 */
export interface ProjectDocumentDataTechItem {
  /**
   * Item field in *[PAGE] Project → Tech*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.tech[].item
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  item: prismic.KeyTextField;
}

type ProjectDocumentDataSlices3Slice =
  | TextBlockSlice
  | VideoBlockSlice
  | CarouselBlockSlice
  | TextAndMediaSlice;

/**
 * Content for [PAGE] Project documents
 */
interface ProjectDocumentData {
  /**
   * Title field in *[PAGE] Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Core
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField /**
   * Meta Description field in *[PAGE] Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.metaDescription
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  metaDescription: prismic.KeyTextField;

  /**
   * Meta Image field in *[PAGE] Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.metaImage
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  metaImage: prismic.ImageField<"card"> /**
   * Hero Image field in *[PAGE] Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.heroImage
   * - **Tab**: Hero
   * - **Documentation**: https://prismic.io/docs/field#image
   */;
  heroImage: prismic.ImageField<"portrait">;

  /**
   * Tint field in *[PAGE] Project*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: project.tint
   * - **Tab**: Hero
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  tint: prismic.ColorField /**
   * Project Link field in *[PAGE] Project*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: project.projectLink
   * - **Tab**: Details
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */;
  projectLink: prismic.LinkField;

  /**
   * Credits field in *[PAGE] Project*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.credits[]
   * - **Tab**: Details
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  credits: prismic.GroupField<Simplify<ProjectDocumentDataCreditsItem>>;

  /**
   * Tech field in *[PAGE] Project*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.tech[]
   * - **Tab**: Details
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tech: prismic.GroupField<Simplify<ProjectDocumentDataTechItem>> /**
   * Intro field in *[PAGE] Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.intro
   * - **Tab**: Intro
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  intro: prismic.RichTextField /**
   * Slice Zone field in *[PAGE] Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices3[]
   * - **Tab**: Article
   * - **Documentation**: https://prismic.io/docs/field#slices
   */;
  slices3: prismic.SliceZone<ProjectDocumentDataSlices3Slice>;
}

/**
 * [PAGE] Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

/**
 * Content for [PAGE] Project Index documents
 */
interface ProjectIndexDocumentData {
  /**
   * Title field in *[PAGE] Project Index*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projectIndex.title
   * - **Tab**: Core
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField /**
   * Meta Description field in *[PAGE] Project Index*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projectIndex.metaDescription
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  metaDescription: prismic.KeyTextField;

  /**
   * Meta Image field in *[PAGE] Project Index*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projectIndex.metaImage
   * - **Tab**: Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  metaImage: prismic.ImageField<never> /**
   * Intro field in *[PAGE] Project Index*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Introduction text that appears above the projects list
   * - **API ID Path**: projectIndex.intro
   * - **Tab**: Intro
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  intro: prismic.RichTextField;
}

/**
 * [PAGE] Project Index document from Prismic
 *
 * - **API ID**: `projectIndex`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectIndexDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ProjectIndexDocumentData>,
    "projectIndex",
    Lang
  >;

/**
 * Item in *Site Footer → Menu Items*
 */
export interface SiteFooterDocumentDataMenuItemsItem {
  /**
   * Link field in *Site Footer → Menu Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: siteFooter.menuItems[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.ContentRelationshipField;

  /**
   * Label field in *Site Footer → Menu Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: siteFooter.menuItems[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Site Footer documents
 */
interface SiteFooterDocumentData {
  /**
   * Menu Items field in *Site Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: siteFooter.menuItems[]
   * - **Tab**: Menu
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menuItems: prismic.GroupField<Simplify<SiteFooterDocumentDataMenuItemsItem>>;
}

/**
 * Site Footer document from Prismic
 *
 * - **API ID**: `siteFooter`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SiteFooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SiteFooterDocumentData>,
    "siteFooter",
    Lang
  >;

export type AllDocumentTypes =
  | GlobalsDocument
  | HomepageDocument
  | LegalPageDocument
  | ProjectDocument
  | ProjectIndexDocument
  | SiteFooterDocument;

/**
 * Primary content in *Carousel Block → Primary*
 */
export interface CarouselBlockSliceDefaultPrimary {
  /**
   * Background Colour field in *Carousel Block → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel_block.primary.backgroundColor
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  backgroundColor: prismic.ColorField;
}

/**
 * Primary content in *Carousel Block → Items*
 */
export interface CarouselBlockSliceDefaultItem {
  /**
   * Heading field in *Carousel Block → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel_block.items[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Body field in *Carousel Block → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel_block.items[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Video URL field in *Carousel Block → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel_block.items[].videoUrl
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  videoUrl: prismic.LinkField;

  /**
   * Image field in *Carousel Block → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel_block.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Carousel Block Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CarouselBlockSliceDefaultPrimary>,
  Simplify<CarouselBlockSliceDefaultItem>
>;

/**
 * Slice variation for *Carousel Block*
 */
type CarouselBlockSliceVariation = CarouselBlockSliceDefault;

/**
 * Carousel Block Shared Slice
 *
 * - **API ID**: `carousel_block`
 * - **Description**: Carousel Block
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselBlockSlice = prismic.SharedSlice<
  "carousel_block",
  CarouselBlockSliceVariation
>;

/**
 * Primary content in *Text + Media Block → Primary*
 */
export interface TextAndMediaSliceDefaultPrimary {
  /**
   * Heading field in *Text + Media Block → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_media.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Body field in *Text + Media Block → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_media.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Image field in *Text + Media Block → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_media.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Text + Media Block Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextAndMediaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextAndMediaSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Text + Media Block → Primary*
 */
export interface TextAndMediaSliceWithVideoPrimary {
  /**
   * Heading field in *Text + Media Block → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_media.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Body field in *Text + Media Block → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_media.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Video URL field in *Text + Media Block → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_and_media.primary.videoUrl
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  videoUrl: prismic.LinkField;
}

/**
 * With Video variation for Text + Media Block Slice
 *
 * - **API ID**: `withVideo`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextAndMediaSliceWithVideo = prismic.SharedSliceVariation<
  "withVideo",
  Simplify<TextAndMediaSliceWithVideoPrimary>,
  never
>;

/**
 * Slice variation for *Text + Media Block*
 */
type TextAndMediaSliceVariation =
  | TextAndMediaSliceDefault
  | TextAndMediaSliceWithVideo;

/**
 * Text + Media Block Shared Slice
 *
 * - **API ID**: `text_and_media`
 * - **Description**: Text + Media Block
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextAndMediaSlice = prismic.SharedSlice<
  "text_and_media",
  TextAndMediaSliceVariation
>;

/**
 * Primary content in *Text Block → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * Heading field in *Text Block → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Body field in *Text Block → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Default variation for Text Block Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Text Block → Primary*
 */
export interface TextBlockSliceTextBlockWithCtaPrimary {
  /**
   * Heading field in *Text Block → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Body field in *Text Block → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * CTA Link field in *Text Block → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.ctaLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  ctaLink: prismic.LinkField;

  /**
   * CTA Label field in *Text Block → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.ctaLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  ctaLabel: prismic.KeyTextField;
}

/**
 * Text Block with CTA variation for Text Block Slice
 *
 * - **API ID**: `textBlockWithCta`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceTextBlockWithCta = prismic.SharedSliceVariation<
  "textBlockWithCta",
  Simplify<TextBlockSliceTextBlockWithCtaPrimary>,
  never
>;

/**
 * Slice variation for *Text Block*
 */
type TextBlockSliceVariation =
  | TextBlockSliceDefault
  | TextBlockSliceTextBlockWithCta;

/**
 * Text Block Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: Text Block
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

/**
 * Primary content in *Video Block → Primary*
 */
export interface VideoBlockSliceDefaultPrimary {
  /**
   * Video URL field in *Video Block → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: video_block.primary.videoUrl
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  videoUrl: prismic.LinkField;

  /**
   * Caption field in *Video Block → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_block.primary.caption
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  caption: prismic.KeyTextField;

  /**
   * File Size field in *Video Block → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_block.primary.fileSize
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  fileSize: prismic.KeyTextField;
}

/**
 * Default variation for Video Block Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Video Block*
 */
type VideoBlockSliceVariation = VideoBlockSliceDefault;

/**
 * Video Block Shared Slice
 *
 * - **API ID**: `video_block`
 * - **Description**: Video Block
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoBlockSlice = prismic.SharedSlice<
  "video_block",
  VideoBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      GlobalsDocument,
      GlobalsDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataProjectsItem,
      HomepageDocumentDataAboutPointsItem,
      LegalPageDocument,
      LegalPageDocumentData,
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataCreditsItem,
      ProjectDocumentDataTechItem,
      ProjectDocumentDataSlices3Slice,
      ProjectIndexDocument,
      ProjectIndexDocumentData,
      SiteFooterDocument,
      SiteFooterDocumentData,
      SiteFooterDocumentDataMenuItemsItem,
      AllDocumentTypes,
      CarouselBlockSlice,
      CarouselBlockSliceDefaultPrimary,
      CarouselBlockSliceDefaultItem,
      CarouselBlockSliceVariation,
      CarouselBlockSliceDefault,
      TextAndMediaSlice,
      TextAndMediaSliceDefaultPrimary,
      TextAndMediaSliceWithVideoPrimary,
      TextAndMediaSliceVariation,
      TextAndMediaSliceDefault,
      TextAndMediaSliceWithVideo,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceTextBlockWithCtaPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
      TextBlockSliceTextBlockWithCta,
      VideoBlockSlice,
      VideoBlockSliceDefaultPrimary,
      VideoBlockSliceVariation,
      VideoBlockSliceDefault,
    };
  }
}
