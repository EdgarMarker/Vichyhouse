import { client } from "@/lib/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export const getHeroData = async () => {
  const QUERY = `*[_type == 'page']{
        pageSections[]->{
        homeHeroSomosExpertos[]{
            title,
            gallery[]{
            "img": asset->{url}
            }
        }
        }
    }`;
  const data = await client.fetch(QUERY);
  return data;
};

export const getHeroIntroData = async () => {
  const QUERY = `*[_type == 'page']{
    pageSections[]->{
      homeIntro{
        homeIntroTitleH1,
        homeIntroSubtitleH2Underline,
        homeIntroSubtitleH2
      }
    }
  }`;
  const data = await client.fetch(QUERY);
  return data;
};

export const getApproachData = async () => {
  const QUERY = `*[_type == 'page']{
    pageSections[]->{
      homeApproach{
      homeApproachTextH3,
      homeApproachTextH2,
      homeApproachTextP,
      homeApproachImg{
      "media": asset,
       asset->{
         altText
          }
        }
      }
    }
  }`;
  const data = await client.fetch(QUERY);
  return data;
};

export const getServicesData = async () => {
  const QUERY = `*[_type == 'page']{
    pageSections[]->{
      homeServices[]{
        homeServicesH2,
        homeServicesP
      }
    }
  }`;
  const data = await client.fetch(QUERY);
  return data;
};

export const getPreviewProjectCard = async () => {
  const QUERY = `*[_type == 'page']{
    pageSections[]->{
      homeProjects{
      relevantProjectsH2,
      relevantProjectsH2Italic,
      relevantProjectPreview[]->{
        projectName,
        projectSlug,
        projectPreviewCard{
          previewCardType,
          previewCardLocation,
          previewCardImg{
            "media": asset,
            asset->{
              altText
            }
          }
        }
      }
    }
  }
}`;
  const data = await client.fetch(QUERY);
  return data;
};

export const getHomeBlogData = async () => {
  const QUERY = `*[_type == 'page']{
    pageSections[]->{
      homeBlog{
        homeBlogH2,
        homeBlogH2Italic,
        homeBlogDescription,
        homeBlogImg{
          "media": asset,
          asset->{
            altText
          }
        },
        homeBlogArticle[]->{
          articleName,
          articleLink,
          articleDescription,
          articleCategory[]{
            value
          }
        }
      }
  }
}`;
  const data = await client.fetch(QUERY);
  return data;
};
