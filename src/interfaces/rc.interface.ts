export interface RcFile {
  resolvePath?: string;
  resolvePathBuild?: string;
  fetcher?: string;
  fetcherParams?: Record<string, any>;
  envPath?: string;
}
