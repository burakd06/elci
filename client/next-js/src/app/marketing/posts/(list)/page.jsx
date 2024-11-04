import { CONFIG } from 'src/config-global';

import { MarketingPostsView } from 'src/sections/_marketing/view/marketing-posts-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Post list | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return <MarketingPostsView />;
}
