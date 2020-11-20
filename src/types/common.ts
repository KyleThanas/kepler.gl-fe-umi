export interface ICompanyPageProps {
  match: {
    params: { companyId: string };
  };
  location: {
    query: { xnkey: string };
    pathname: string;
  };
}
