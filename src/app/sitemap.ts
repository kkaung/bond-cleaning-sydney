import { type MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/utils';
import { allPosts, allPages, allAuthors } from 'contentlayer/generated';
import { locations } from '@/configs/location';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pagesRoutes = allPages.map(page => ({
        url: absoluteUrl(`/${page.slugAsParams}`),
        lastModified: new Date().toISOString(),
    }));

    const postsRoutes = allPosts.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const authorsRoutes = allAuthors.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const allSuburbs = locations.flatMap(location => location.items);

    const bondCleaningRoutes: any[] = [];

    locations.forEach(city => {
        const cityName = city.title.toLowerCase();
        const cityRoutes = city.items.map(suburb => ({
            url: absoluteUrl(`/bond-cleaning-${cityName}/${suburb.slug}`),
            lastModified: new Date().toISOString(),
        }));

        bondCleaningRoutes.push(...cityRoutes);
    });

    const routes = ['', '/pricing'].map(route => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...pagesRoutes];
}
