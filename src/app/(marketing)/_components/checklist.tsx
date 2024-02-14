'use client';

import { Icons } from '@/components/icons';
import { headingVariants } from '@/components/page-header';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import React, { type HTMLAttributes, useState } from 'react';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';

interface ChecklistProps extends HTMLAttributes<HTMLElement> {}

export default function Checklist({ ...props }: ChecklistProps) {
    const [tab, setTab] = useState('');

    const tabs = [
        {
            title: 'Kitchen',
            value: 'kitchen',
            items: [
                { title: 'Clean oven inside & outside (including trays)' },
                { title: 'Clean inside and outside built-in microwave' },
                { title: 'Clean cooktop & grill' },
                { title: 'Clean range-hood & filter' },
                { title: 'Clean bench top surfaces & splashback' },
                { title: 'Clean sink, taps & handles' },
                {
                    title: 'Clean inside & outside cabinets & drawers. Including top of cabinets',
                },
                {
                    title: 'Dust and remove cobwebs',
                },
                {
                    title: 'Vacuum and mop floors',
                },
                {
                    title: 'Clean outside dishwasher & handles',
                },
                {
                    title: 'Clean windows, sills & tracks (internally)',
                },
                {
                    title: 'Scrub & clean skirting boards',
                },
                {
                    title: 'Clean and dust lighting, switches, and fixtures.',
                },
                {
                    title: 'Spot clean walls',
                },
            ],
        },
        {
            title: 'Bathroom & Toilet:',
            value: 'bathroom-and-toilet',
            items: [
                { title: 'Vacuum and mop floors' },
                {
                    title: 'Vacuum and mop floors',
                },
                {
                    title: 'Clean and descale shower screen and tiles',
                },
                {
                    title: 'Clean & dust exhaust fans & air vents',
                },
                {
                    title: 'Clean windows sills and tracks (internally)',
                },
                {
                    title: 'Clean toilet inside and outside',
                },
                {
                    title: 'Clean mirrors and wipe all counters',
                },
                {
                    title: 'Clean basin & bathtub (including taps & handles)',
                },
                {
                    title: 'Clean vanity (including taps & handles)',
                },
                {
                    title: 'Scrub & clean skirting boards',
                },
                {
                    title: 'Clean and dust lighting, switches, and fixtures',
                },
                {
                    title: 'Clean inside & outside cabinets & drawers',
                },
                {
                    title: 'Wipe clean doors and door frames',
                },
                {
                    title: 'Dust and remove cobwebs',
                },
                {
                    title: 'Scrub mineral deposits & mould',
                },
            ],
        },
        {
            title: 'Entry & Hallway',
            value: 'entry-and-hallway',
            items: [
                { title: 'Vacuum and mop floor' },
                { title: 'Scrub & clean skirting boards' },
                { title: 'Clean and dust lighting, switches, and fixtures' },
                { title: 'Spot clean walls' },
                { title: 'Dust and remove cobwebs' },
                { title: 'Wipe clean doors and door frames' },
            ],
        },
        {
            title: 'Laundary',
            value: 'launday',
            items: [
                { title: 'Vacuum and mop floor' },
                { title: 'Scrub & clean skirting boards' },
            ],
        },
        {
            title: 'Bedroom',
            value: 'bedroom',
            items: [{ title: 'Vacuum and mop floor' }],
        },
        {
            title: 'Living & Diving',
            value: 'living-and-diving',
            items: [{ title: 'Vacuum and mop floor' }],
        },
    ];

    return (
        <section
            id="checklists"
            aria-labelledby="checklists-heading"
            className={cn(props.className, 'py-12 space-y-12')}
            {...props}
        >
            <div className="space-y-1">
                <p className="text-pink-500 uppercase font-medium">
                    What&apos;s Included
                </p>
                <h2 className={headingVariants({})}>
                    {siteConfig.name}&apos;s Bond Cleaning Checklist
                </h2>
            </div>
            <div>
                <Accordion
                    type="single"
                    collapsible
                    value={tab}
                    onValueChange={setTab}
                    className={cn(
                        props.className,
                        'grid grid-cols-1 gap-6 md:grid-cols-2'
                    )}
                >
                    {tabs.map(t => (
                        <AccordionItem
                            key={t.value}
                            value={t.value}
                            className="border rounded-lg"
                        >
                            <AccordionTrigger className="px-4">
                                {t.title}
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                                <ul className="space-y-1">
                                    {t.items.map(i => (
                                        <li key={i.title}>
                                            <Icons.check className="w-4 h-4 inline mr-1" />
                                            <span>{i.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
