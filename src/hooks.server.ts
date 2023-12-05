import { init } from '@jill64/sentry-sveltekit-cloudflare/server'
import { onRender } from '@jill64/svelte-suite'

const { onHandle, onError } = init(
  'https://a002be94e5a9dfad1fdc56df5ea34f4b@o4505814639312896.ingest.sentry.io/4506253567328256'
)

export const handle = onHandle(onRender())
export const handleError = onError()
