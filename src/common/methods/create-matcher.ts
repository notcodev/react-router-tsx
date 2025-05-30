import type { AnyParams, Matcher, RouteInstance } from '../types'

export const createMatcher = ({
  routes,
}: {
  routes: { path: string; route: RouteInstance<AnyParams> }[]
}): Matcher => {
  const map = new Map<RouteInstance<AnyParams>, string>(
    routes.map(({ path, route }) => [route, path]),
  )

  const getPath = (route: RouteInstance<AnyParams>): string => {
    const path = map.get(route)

    if (path === undefined) {
      throw new Error('Using route without providing it into tools builder is not allowed')
    }

    return path
  }

  return { getPath }
}
