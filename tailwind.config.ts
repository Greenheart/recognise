import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import defaultTheme from 'tailwindcss/defaultTheme'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { join } from 'path'

export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(
            require.resolve('@skeletonlabs/skeleton'),
            '../**/*.{html,js,svelte,ts}'
        ),
    ],
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
        extend: {},
    },
    plugins: [
        forms,
        skeleton({
            base: true,
            themes: {
                preset: [
                    {
                        name: 'skeleton',
                        enhancements: true,
                    },
                ],
            },
        }),
    ],
} satisfies Config
