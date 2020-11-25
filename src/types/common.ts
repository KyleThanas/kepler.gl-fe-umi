export interface ICompanyPageProps {
  match: {
    params: { companyId: string };
  };
  location: {
    query: {
      xnkey: string;
      locale: string;
    };
    pathname: string;
  };
}

export interface IKeplerProps {
  app?: {
    appName: string;
    loaded: boolean;
  };
  dispatch?: any;
  keplerGl?: any;
}
