import { generateClasses } from '@formkit/themes'

export default {
  config: {
    classes: generateClasses({
      text: {
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm text-accent-500',
        inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden',
        input: 'w-full py-2 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-lg focus:ring-2',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      }
    })
  }
}