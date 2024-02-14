import { headers } from 'next/headers';
import { toTitleCase } from './utils';

export const getCity = () => {
    const headersList = headers();

    return headersList.get('x-vercel-ip-city') ?? '';
};

export const getPathname = () => {
    const _headers = headers();

    const pathname = _headers.get('x-pathname') || '';

    return pathname;
};
