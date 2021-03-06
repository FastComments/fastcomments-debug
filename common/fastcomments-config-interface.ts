export interface FastCommentsSSO {
  /** The user's data represented as JSON, and then Base64'd. Leave empty for an unauthenticated user. */
  userDataJSONBase64: string
  /** The HMAC-SHA256 hash of the userDataJSONBase64 field, using your secret key. Leave empty for an unauthenticated user. */
  verificationHash: string
  /** The timestamp of when the verificationHash was created. */
  timestamp: string
  /** The logout URL for the user. If you define the SSO configuration, but not this, the logout link won't be shown. */
  logoutURL?: string
  /** The login URL for the user, which will show if they try to comment and they are not authenticated. */
  loginURL?: string
}

export interface FastCommentsConfig {
  /** Id that represents you as a customer. */
  tenantId: string
  /** Id that represents the page, if you don't want to tie comments to the page url. Could be a URL or an ID (like an article id). */
  urlId?: string
  /** URL that represents the page, if you don't want to tie to the page url in the browser. Must always be a URL. */
  url?: string
  /** Whether or not the comment widget is on a page or element with a dark background. If undefined the widget will try to determine the background color itself. */
  hasDarkBackground?: boolean
  /** Title of the page that the widget is on. */
  pageTitle?: string
  /** String used to compose the comment count. Use [count] to interpolate value. Default is "[count] comments on this page." (Customizable via the UI.) */
  commentCountFormat?: string
  /** The original referrer (you can't customize this via the embed code). */
  originalReferrer?: string
  /** Don't show avatars. (Customizable via the UI.) */
  hideAvatars?: boolean
  /** Disable commenting for this page, but still show the comments. */
  readonly?: boolean
  /** Place the page-level comment reply at the bottom of the comment list. (Customizable via the UI.) */
  inputAfterComments?: boolean
  /** Maximum character length for a comment. Default is 2k characters. */
  maxCommentCharacterLength?: number
  /** Don't use relative dates like "11 minutes ago". (Customizable via the UI.) */
  absoluteDates?: boolean
  /** Text like "Show [count] comments". When defined we won't show the comment list. Instead show a link with the given text, which shows the comments upon clicking. (Customizable via the UI.) */
  hideCommentsUnderCountTextFormat?: string
  /** Header HTML. (Customizable via the UI.) */
  headerHTML?: boolean
  /** console.log time to create HTML for rendering. */
  debugRenderTime?: boolean
  /** Disables inserting default style tag into DOM. (Customizable via the UI.) */
  noStyles?: boolean
  /** Disables email requirement. (Customizable via the UI.) */
  allowAnon?: boolean
  /** Disables adding images. (Customizable via the UI.) */
  noImageUploads?: boolean
  /** locale, valid values are en-us, fr-fr, se-se */
  locale?: string
  /** Whether or not the comment count should include all comments instead of just the top-level ones */
  countAll?: boolean
  /** Whether or not to show comments right away, without having to click "show N comments". */
  showLiveRightAway?: boolean
  /** SSO Configuration. For an unauthenticated user, do not define userDataJSONBase64 and verificationHash. See <a href="https://blog.fastcomments.com/(4-13-2020)-setting-up-sso-with-fastcomments" target="_blank">the documentation</a>. */
  sso?: FastCommentsSSO
}
