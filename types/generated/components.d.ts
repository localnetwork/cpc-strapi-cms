import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedTimeline extends Schema.Component {
  collectionName: 'components_shared_timelines';
  info: {
    displayName: 'Timeline';
    icon: 'filter';
    description: '';
  };
  attributes: {
    Timelines: Attribute.Component<'shared.timeline-item', true>;
    Theme: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']>;
    Title: Attribute.String;
  };
}

export interface SharedTimelineItem extends Schema.Component {
  collectionName: 'components_shared_timeline_items';
  info: {
    displayName: 'Timeline Item';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Gallery: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface SharedText extends Schema.Component {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
    icon: 'underline';
    description: '';
  };
  attributes: {
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Theme: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']>;
    Alignment: Attribute.Enumeration<['Left', 'Center', 'Right']> &
      Attribute.DefaultTo<'Left'>;
    Title: Attribute.String;
  };
}

export interface SharedSubjects extends Schema.Component {
  collectionName: 'components_shared_subjects';
  info: {
    displayName: 'Subjects';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Year: Attribute.String & Attribute.Required;
    Semester: Attribute.Component<'shared.sem', true>;
  };
}

export interface SharedSubjectItem extends Schema.Component {
  collectionName: 'components_shared_subject_items';
  info: {
    displayName: 'SubjectItem';
    icon: 'bulletList';
  };
  attributes: {
    SubjectCode: Attribute.String;
    DescriptionTitle: Attribute.Text;
    Units: Attribute.Integer;
  };
}

export interface SharedStat extends Schema.Component {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'Stat';
    icon: 'layer';
  };
  attributes: {
    Value: Attribute.String;
    Label: Attribute.String;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    Items: Attribute.Component<'shared.slider-item', true>;
  };
}

export interface SharedSliderItem extends Schema.Component {
  collectionName: 'components_shared_slider_items';
  info: {
    displayName: 'Slider Item';
    icon: 'landscape';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSiteInfoSocial extends Schema.Component {
  collectionName: 'components_shared_site_info_socials';
  info: {
    displayName: 'SiteInfoSocial';
    icon: 'bulletList';
  };
  attributes: {
    Platform: Attribute.Enumeration<['Facebook', 'Instagram', 'Tiktok', 'X']> &
      Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSem extends Schema.Component {
  collectionName: 'components_shared_sems';
  info: {
    displayName: 'Sem';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Sem: Attribute.String;
    Subjects: Attribute.Component<'shared.subject-item', true>;
  };
}

export interface SharedPortraitMediaText extends Schema.Component {
  collectionName: 'components_shared_portrait_media_texts';
  info: {
    displayName: 'PortraitMediaText';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Theme: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']>;
  };
}

export interface SharedPeopleGroup extends Schema.Component {
  collectionName: 'components_shared_people_groups';
  info: {
    displayName: 'PeopleGroup';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    People: Attribute.Relation<
      'shared.people-group',
      'oneToMany',
      'api::faculty.faculty'
    >;
  };
}

export interface SharedPageNewsListing extends Schema.Component {
  collectionName: 'components_shared_page_news_listings';
  info: {
    displayName: 'PageNewsListing';
    icon: 'bulletList';
    description: '';
  };
  attributes: {};
}

export interface SharedPageBlogHeader extends Schema.Component {
  collectionName: 'components_shared_page_blog_headers';
  info: {
    displayName: 'PageNewsHeader';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface SharedPageBanner extends Schema.Component {
  collectionName: 'components_shared_page_banners';
  info: {
    displayName: 'PageBanner';
    icon: 'picture';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedPageBannerText extends Schema.Component {
  collectionName: 'components_shared_page_banner_texts';
  info: {
    displayName: 'BannerText';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    ShowBreadcrumbs: Attribute.Boolean & Attribute.DefaultTo<false>;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Color: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']> &
      Attribute.Required;
  };
}

export interface SharedOurPeople extends Schema.Component {
  collectionName: 'components_shared_our_people';
  info: {
    displayName: 'OurPeople';
    icon: 'user';
    description: '';
  };
  attributes: {
    Theme: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']> &
      Attribute.Required &
      Attribute.DefaultTo<'Jet Black'>;
    Groups: Attribute.Component<'shared.people-group', true> &
      Attribute.Required;
  };
}

export interface SharedNews extends Schema.Component {
  collectionName: 'components_shared_news';
  info: {
    displayName: 'News';
    icon: 'envelop';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SharedNewsBlock extends Schema.Component {
  collectionName: 'components_shared_news_blocks';
  info: {
    displayName: 'NewsBlock';
    icon: 'envelop';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SharedMeta extends Schema.Component {
  collectionName: 'components_shared_metas';
  info: {
    displayName: 'Meta';
    icon: 'check';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'crop';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface SharedMediaText extends Schema.Component {
  collectionName: 'components_shared_media_texts';
  info: {
    displayName: 'MediaText';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Theme: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']> &
      Attribute.Required;
    MediaPos: Attribute.Enumeration<['Left', 'Right']> &
      Attribute.Required &
      Attribute.DefaultTo<'Left'>;
  };
}

export interface SharedMediaCard extends Schema.Component {
  collectionName: 'components_shared_media_cards';
  info: {
    displayName: 'MediaCard';
    icon: 'picture';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Theme: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']> &
      Attribute.Required;
    Alignment: Attribute.Enumeration<['Left', 'Right']> &
      Attribute.Required &
      Attribute.DefaultTo<'Right'>;
    Link: Attribute.String;
  };
}

export interface SharedLandscapeMediaText extends Schema.Component {
  collectionName: 'components_shared_landscape_media_texts';
  info: {
    displayName: 'Message';
    icon: 'expand';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    Description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Color: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']> &
      Attribute.DefaultTo<'Off White'>;
    Subtitle: Attribute.String;
  };
}

export interface SharedKeyPeople extends Schema.Component {
  collectionName: 'components_shared_key_people';
  info: {
    displayName: 'KeyPeople';
    description: '';
  };
  attributes: {
    Items: Attribute.Relation<
      'shared.key-people',
      'oneToMany',
      'api::faculty.faculty'
    >;
    Theme: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']> &
      Attribute.Required &
      Attribute.DefaultTo<'Jet Black'>;
  };
}

export interface SharedInterstitial extends Schema.Component {
  collectionName: 'components_shared_interstitials';
  info: {
    displayName: 'Interstitial';
    icon: 'landscape';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SharedInterstitialContent extends Schema.Component {
  collectionName: 'components_shared_interstitial_contents';
  info: {
    displayName: 'Interstitial Content';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Theme: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']> &
      Attribute.DefaultTo<'Jet Black'>;
  };
}

export interface SharedImageWithStats extends Schema.Component {
  collectionName: 'components_shared_image_with_stats';
  info: {
    displayName: 'ImageWithStats';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Stats: Attribute.Component<'shared.stat', true>;
    Color: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']>;
  };
}

export interface SharedHeroGridVideo extends Schema.Component {
  collectionName: 'components_shared_hero_grid_videos';
  info: {
    displayName: 'HeroGridVideo';
    icon: 'picture';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Video: Attribute.Text;
  };
}

export interface SharedHeroGridColumns extends Schema.Component {
  collectionName: 'components_shared_hero_grid_columns';
  info: {
    displayName: 'HeroGridColumns';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Items: Attribute.Component<'shared.hero-grid-column-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
  };
}

export interface SharedHeroGridColumnItem extends Schema.Component {
  collectionName: 'components_shared_hero_grid_column_items';
  info: {
    displayName: 'HeroGridColumnItem';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SharedFaqItem extends Schema.Component {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'bulletList';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SharedFacultyBlock extends Schema.Component {
  collectionName: 'components_shared_faculty_blocks';
  info: {
    displayName: 'PeopleBlock';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    FeaturedPeople: Attribute.Relation<
      'shared.faculty-block',
      'oneToMany',
      'api::faculty.faculty'
    >;
  };
}

export interface SharedCwaItems extends Schema.Component {
  collectionName: 'components_shared_cwa_items';
  info: {
    displayName: 'CWAItems';
    icon: 'bulletList';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Items: Attribute.Component<'shared.accordion', true>;
  };
}

export interface SharedCoursesBlock extends Schema.Component {
  collectionName: 'components_shared_courses_blocks';
  info: {
    displayName: 'CoursesBlock';
    icon: 'write';
    description: '';
  };
  attributes: {
    Courses: Attribute.Relation<
      'shared.courses-block',
      'oneToMany',
      'api::course.course'
    >;
    Title: Attribute.String;
  };
}

export interface SharedCardsWithAccordion extends Schema.Component {
  collectionName: 'components_shared_cards_with_accordions';
  info: {
    displayName: 'CardsWithAccordion';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Theme: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']> &
      Attribute.Required;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Groups: Attribute.Component<'shared.cwa-items', true>;
  };
}

export interface SharedCardTextsBlock extends Schema.Component {
  collectionName: 'components_shared_card_texts_blocks';
  info: {
    displayName: 'CardTextsBlock';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Cards: Attribute.Component<'shared.card-text', true>;
    Theme: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']>;
  };
}

export interface SharedCardText extends Schema.Component {
  collectionName: 'components_shared_card_texts';
  info: {
    displayName: 'CardText';
    icon: 'server';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Link: Attribute.String;
  };
}

export interface SharedBanner extends Schema.Component {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
    icon: 'picture';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SharedBannerMediaText extends Schema.Component {
  collectionName: 'components_shared_banner_media_texts';
  info: {
    displayName: 'BannerMediaText';
    icon: 'expand';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    ShowBreadcrumbs: Attribute.Boolean & Attribute.Required;
    Theme: Attribute.Enumeration<['Off White', 'Jet Black', 'Black']>;
  };
}

export interface SharedBannerGrid extends Schema.Component {
  collectionName: 'components_shared_banner_grids';
  info: {
    displayName: 'Banner Grid';
    icon: 'crop';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SharedAccordion extends Schema.Component {
  collectionName: 'components_shared_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'layer';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SharedAboutSchool extends Schema.Component {
  collectionName: 'components_shared_about_schools';
  info: {
    displayName: 'AboutSchool';
    icon: 'question';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Link: Attribute.String;
    Logo: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.timeline': SharedTimeline;
      'shared.timeline-item': SharedTimelineItem;
      'shared.text': SharedText;
      'shared.subjects': SharedSubjects;
      'shared.subject-item': SharedSubjectItem;
      'shared.stat': SharedStat;
      'shared.slider': SharedSlider;
      'shared.slider-item': SharedSliderItem;
      'shared.site-info-social': SharedSiteInfoSocial;
      'shared.seo': SharedSeo;
      'shared.sem': SharedSem;
      'shared.portrait-media-text': SharedPortraitMediaText;
      'shared.people-group': SharedPeopleGroup;
      'shared.page-news-listing': SharedPageNewsListing;
      'shared.page-blog-header': SharedPageBlogHeader;
      'shared.page-banner': SharedPageBanner;
      'shared.page-banner-text': SharedPageBannerText;
      'shared.our-people': SharedOurPeople;
      'shared.news': SharedNews;
      'shared.news-block': SharedNewsBlock;
      'shared.meta': SharedMeta;
      'shared.meta-social': SharedMetaSocial;
      'shared.media': SharedMedia;
      'shared.media-text': SharedMediaText;
      'shared.media-card': SharedMediaCard;
      'shared.landscape-media-text': SharedLandscapeMediaText;
      'shared.key-people': SharedKeyPeople;
      'shared.interstitial': SharedInterstitial;
      'shared.interstitial-content': SharedInterstitialContent;
      'shared.image-with-stats': SharedImageWithStats;
      'shared.hero-grid-video': SharedHeroGridVideo;
      'shared.hero-grid-columns': SharedHeroGridColumns;
      'shared.hero-grid-column-item': SharedHeroGridColumnItem;
      'shared.faq-item': SharedFaqItem;
      'shared.faculty-block': SharedFacultyBlock;
      'shared.cwa-items': SharedCwaItems;
      'shared.courses-block': SharedCoursesBlock;
      'shared.cards-with-accordion': SharedCardsWithAccordion;
      'shared.card-texts-block': SharedCardTextsBlock;
      'shared.card-text': SharedCardText;
      'shared.banner': SharedBanner;
      'shared.banner-media-text': SharedBannerMediaText;
      'shared.banner-grid': SharedBannerGrid;
      'shared.accordion': SharedAccordion;
      'shared.about-school': SharedAboutSchool;
    }
  }
}
