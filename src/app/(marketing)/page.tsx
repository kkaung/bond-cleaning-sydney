import { type Metadata } from 'next';
import React from 'react';
import { BreadcrumbJsonLd, OrganizationJsonLd } from 'next-seo';
import { absoluteUrl } from '@/lib/utils';
import { siteConfig } from '@/configs/site';

import Content from './_components/content';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `End Of Lease Cleaning Sydney - Bond Cleaning`,
    description: `Professional End of Lease Cleaning Service in Sydney with 100% Bond Back Guarantee and the Lowest Price Guaranteed. Book online in less than 60 seconds.`,
};

export default function Page() {
    return (
        <>
            <Content />
            <OrganizationJsonLd
                useAppDir
                id={absoluteUrl('')}
                type=""
                name={siteConfig.name}
                description={siteConfig.description}
                legalName={siteConfig.name}
                url={absoluteUrl('')}
                logo={absoluteUrl('/')}
                sameAs={[
                    siteConfig.links.facebook,
                    siteConfig.links.linkin,
                    siteConfig.links.instagram,
                    siteConfig.links.twitter,
                    siteConfig.links.youtube,
                ]}
                address={{
                    streetAddress: '101/ 761 - 763 George St Haymarket',
                    addressLocality: 'Sydney',
                    addressRegion: 'NSW',
                    postalCode: '2000',
                    addressCountry: 'AU',
                }}
                aggregateRating={{
                    ratingValue: siteConfig.rating.ratingValue,
                    ratingCount: siteConfig.rating.ratingCount,
                }}
                brand={{
                    name: siteConfig.name,
                }}
            />
            <BreadcrumbJsonLd
                useAppDir
                itemListElements={[
                    {
                        position: 1,
                        name: 'Home',
                        item: absoluteUrl(''),
                    },
                ]}
            />
        </>
    );
}
