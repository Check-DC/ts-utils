/**
 * Shares content on mobile devices using the Web Share API, if available.
 *
 * @param {object} data - The data object containing sharing information.
 * @param {string} [data.title] - The title of the content to be shared.
 * @param {string} [data.text] - The text/content to be shared.
 * @param {string} [data.url] - The URL associated with the content to be shared.
 *
 * @example
 * // Example usage:
 * mobileShare({
 *   title: 'Amazing Article',
 *   text: 'Check out this interesting article!',
 *   url: 'https://example.com/article'
 * });
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share|Web Share API}
 */

export const mobileShare = (data: ShareData) => {
  if (navigator.share) {
    navigator.share({
      title: data.title,
      text: data.text,
      url: data.url,
    })
  }
}
