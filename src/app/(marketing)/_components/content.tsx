import { Shell } from '@/components/shell';
import React, { type HTMLAttributes } from 'react';
import Hero from './hero';
import FAQs from './faqs';
import Reviews from './reviews';
import Features from './features';
import LatestBlog from './latest-blog';
import Commitment from './commitment';
import About from './about';
import Checklist from './checklist';

interface ContentProps extends HTMLAttributes<HTMLElement> {}

export default function Content({ ...props }: ContentProps) {
    return (
        <Shell>
            <Hero />
            <Reviews location="" />
            <Features />
            <About />
            <Checklist />
            <FAQs />
            <LatestBlog />
            <Commitment />
        </Shell>
    );
}
