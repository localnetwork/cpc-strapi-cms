import type { Schema, Attribute } from '@strapi/strapi';

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

export interface SharedFacultyBlock extends Schema.Component {
  collectionName: 'components_shared_faculty_blocks';
  info: {
    displayName: 'FacultyBlock';
    icon: 'emotionHappy';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.slider': SharedSlider;
      'shared.slider-item': SharedSliderItem;
      'shared.seo': SharedSeo;
      'shared.news': SharedNews;
      'shared.news-block': SharedNewsBlock;
      'shared.meta': SharedMeta;
      'shared.meta-social': SharedMetaSocial;
      'shared.hero-grid-video': SharedHeroGridVideo;
      'shared.hero-grid-columns': SharedHeroGridColumns;
      'shared.hero-grid-column-item': SharedHeroGridColumnItem;
      'shared.faculty-block': SharedFacultyBlock;
      'shared.courses-block': SharedCoursesBlock;
      'shared.banner': SharedBanner;
      'shared.accordion': SharedAccordion;
    }
  }
}
