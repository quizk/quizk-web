/**
 * Scroll to the first element that matches the CSS selector.
 * Suitable for form validations, re-opening components with selected value, etc.
 */
export const scrollToElement = (query: string) => {
  const firstQueriedElement = document.querySelectorAll(query)[0]

  if (firstQueriedElement)
    firstQueriedElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
}
