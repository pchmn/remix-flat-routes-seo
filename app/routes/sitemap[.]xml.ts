import { generateSitemap } from "@nasa-gcn/remix-seo";
import { routes } from "@remix-run/dev/server-build";
import type { LoaderFunctionArgs } from "@remix-run/node";

export function loader({ request }: LoaderFunctionArgs) {
  // Remove the _layout parent id from the routes
  // Uncomment to fix extra slashes in the sitemap
  // for (const key in routes) {
  //   const route = routes[key];
  //   if (route.parentId?.includes('_layout')) {
  //     route.parentId = routes[route.parentId].parentId;
  //   }
  // }
  return generateSitemap(request, routes, {
    siteUrl: "https://balavishnuvj.com",
  });
}
