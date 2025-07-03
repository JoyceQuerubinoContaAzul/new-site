import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge<'foo'>({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'title-h1',
            'title-h2',
            'title-h3',
            'xl-regular',
            'xl-medium',
            'xl-bold',
            'lg-regular',
            'lg-medium',
            'lg-bold',
            'md-regular',
            'md-medium',
            'md-bold',
            'sm-regular',
            'sm-medium',
            'sm-bold',
            'xs-regular',
            'xs-medium',
            'xs-bold',
            'xxs-regular',
            'xxs-medium',
            'xxs-bold',
          ],
        },
      ],
    },
  },
});

/**
 * A utility function to merge Tailwind CSS classes and apply custom class groups.
 *
 * This function accepts any number of class names or arrays of class names as input.
 * It uses the `clsx` library to merge the class names and then applies the custom class groups
 * defined in the `twMerge` configuration.
 *
 * @param inputs - Any number of class names or arrays of class names to be merged.
 * @returns A string containing the merged and extended Tailwind CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
