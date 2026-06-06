const arrayKeys = [
  'apiResources',
  'eventResources',
  'entityTypes',
  'capabilities',
  'dataProducts',
  'agents',
  'overlays',
  'integrationDependencies',
  'vendors',
  'products',
  'packages',
  'consumptionBundles',
  'groups',
  'groupTypes',
  'tombstones',
] as const;

function isArrayKey(key: string): key is (typeof arrayKeys)[number] {
  return (arrayKeys as readonly string[]).includes(key);
}
